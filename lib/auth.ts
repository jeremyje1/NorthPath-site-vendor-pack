import { supabase } from "./supabase";

export interface User {
  id: string;
  email: string;
  full_name?: string;
  company?: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: "free" | "starter" | "professional" | "enterprise";
  status: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  current_period_start?: string;
  current_period_end?: string;
}

// Authentication functions
export async function signUp(
  email: string,
  password: string,
  userData?: { full_name?: string; company?: string },
) {
  if (!supabase) throw new Error("Supabase not initialized");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  if (!supabase) throw new Error("Supabase not initialized");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  if (!supabase) throw new Error("Supabase not initialized");

  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser(): Promise<User | null> {
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: userData, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return userData;
}

export async function getUserSubscription(userId: string): Promise<Subscription | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching subscription:", error);
    return null;
  }

  return data;
}

export async function updateUserSubscription(userId: string, updates: Partial<Subscription>) {
  if (!supabase) throw new Error("Supabase not initialized");

  const { data, error } = await supabase
    .from("subscriptions")
    .update(updates)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function grantDocumentAccess(
  userId: string,
  documentType: string,
  expiresAt?: string,
) {
  if (!supabase) throw new Error("Supabase not initialized");

  const { data, error } = await supabase
    .from("document_access")
    .insert({
      user_id: userId,
      document_type: documentType,
      expires_at: expiresAt,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserDocumentAccess(userId: string) {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("document_access")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function trackAnalyticsEvent(
  userId: string | null,
  eventType: string,
  eventData?: any,
) {
  if (!supabase) return;

  const { error } = await supabase.from("analytics_events").insert({
    user_id: userId,
    event_type: eventType,
    event_data: eventData,
  });

  if (error) {
    console.error("Analytics tracking error:", error);
  }
}

// Helper function to check if user has access to a document type
export async function hasDocumentAccess(userId: string, documentType: string): Promise<boolean> {
  if (!supabase) return false;

  const { data, error } = await supabase
    .from("document_access")
    .select("expires_at")
    .eq("user_id", userId)
    .eq("document_type", documentType)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error || !data || data.length === 0) {
    return false;
  }

  const access = data[0];
  if (!access.expires_at) return true;

  return new Date(access.expires_at) > new Date();
}

// Helper function to check subscription status and permissions
export async function getUserPermissions(userId: string) {
  const subscription = await getUserSubscription(userId);
  const documentAccess = await getUserDocumentAccess(userId);

  const permissions = {
    canAccessVendorPack: false,
    canAccessConnectors: false,
    canAccessEvalOps: false,
    canAccessSupport: false,
    subscriptionStatus: subscription?.status || "none",
    planType: subscription?.plan_type || "free",
  };

  if (!subscription) return permissions;

  switch (subscription.plan_type) {
    case "free":
      permissions.canAccessVendorPack = documentAccess.some(
        (doc) => doc.document_type === "vendor_pack",
      );
      break;
    case "starter":
      permissions.canAccessVendorPack = true;
      break;
    case "professional":
      permissions.canAccessVendorPack = true;
      permissions.canAccessConnectors = true;
      permissions.canAccessEvalOps = true;
      permissions.canAccessSupport = true;
      break;
    case "enterprise":
      permissions.canAccessVendorPack = true;
      permissions.canAccessConnectors = true;
      permissions.canAccessEvalOps = true;
      permissions.canAccessSupport = true;
      // Enterprise has additional features that could be added here
      break;
  }

  return permissions;
}
