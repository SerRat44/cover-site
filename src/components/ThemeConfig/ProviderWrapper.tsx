"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  MantineProvider,
  mergeThemeOverrides,
  type MantineThemeOverride,
} from "@mantine/core";
import { defaultTheme } from "@/types/theme";

const THEME_STORAGE_KEY = "app-theme";

interface ThemeContextType {
  theme: MantineThemeOverride;
  updateTheme: (nextTheme: MantineThemeOverride) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return context;
};

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<MantineThemeOverride>(defaultTheme);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) {
      try {
        setTheme(mergeThemeOverrides(defaultTheme, JSON.parse(saved)));
      } catch {}
    }
  }, []);

  const updateTheme = (nextTheme: MantineThemeOverride) => {
    const updated = mergeThemeOverrides(theme, nextTheme);
    setTheme(updated);
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}
