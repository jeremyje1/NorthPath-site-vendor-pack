// Simple theme persistence utility
export function getInitialTheme(): "light" | "dark" | "system" {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  }
  return "system";
}

export function setTheme(theme: "light" | "dark" | "system") {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);

    // Apply theme immediately
    const root = document.documentElement;
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", theme === "dark");
    }
  }
}

export function initializeTheme() {
  if (typeof window !== "undefined") {
    const theme = getInitialTheme();
    setTheme(theme);
  }
}
