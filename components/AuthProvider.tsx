"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { getCurrentUser, getUserPermissions, type User } from "@/lib/auth";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  supabaseUser: SupabaseUser | null;
  permissions: any;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [permissions, setPermissions] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const userData = await getCurrentUser();
      setUser(userData);

      if (userData) {
        const userPermissions = await getUserPermissions(userData.id);
        setPermissions(userPermissions);
      } else {
        setPermissions(null);
      }
    } catch (error) {
      console.error("Error refreshing user:", error);
      setUser(null);
      setPermissions(null);
    }
  };

  const handleSignOut = async () => {
    if (!supabase) return;

    try {
      await supabase.auth.signOut();
      setUser(null);
      setSupabaseUser(null);
      setPermissions(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSupabaseUser(session?.user || null);

        if (session?.user) {
          await refreshUser();
        }
      } catch (error) {
        console.error("Error getting initial session:", error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    if (!supabase) return;

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSupabaseUser(session?.user || null);

      if (session?.user) {
        await refreshUser();
      } else {
        setUser(null);
        setPermissions(null);
      }

      if (event === "SIGNED_OUT") {
        setUser(null);
        setPermissions(null);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = useMemo(
    () => ({
      user,
      supabaseUser,
      permissions,
      loading,
      signOut: handleSignOut,
      refreshUser,
    }),
    [user, supabaseUser, permissions, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
