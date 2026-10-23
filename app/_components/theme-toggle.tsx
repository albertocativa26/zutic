"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "zutic-theme";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-xl border border-cyan-900/40 bg-[#0d121f] p-2 text-cyan-400 transition-colors hover:border-cyan-500/50 hover:bg-cyan-950/60"
      aria-label="Alternar entre modo claro e modo escuro"
      title="Alternar tema"
    >
      <Sun className="theme-icon-light h-5 w-5" />
      <Moon className="theme-icon-dark h-5 w-5" />
    </button>
  );
}
