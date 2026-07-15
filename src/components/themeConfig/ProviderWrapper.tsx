"use client";

import React, { createContext, useContext, useState } from "react";
import {
  MantineProvider,
  mergeThemeOverrides,
  type MantineThemeOverride,
  type MantineColorScheme,
} from "@mantine/core";
import { saveTheme } from "@/app/actions/theme";
import { defaultTheme } from "@/types/theme";

interface ThemeContextType {
  theme: MantineThemeOverride;
  updateTheme: (nextTheme: MantineThemeOverride) => void;
}

interface ProviderWrapperProps {
  children: React.ReactNode;
  initialTheme?: MantineThemeOverride;
  initialColorScheme: Exclude<MantineColorScheme, "auto">;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return context;
};

export function ProviderWrapper({
  children,
  initialTheme,
  initialColorScheme,
}: ProviderWrapperProps) {
  const [theme, setTheme] = useState<MantineThemeOverride>(() =>
    mergeThemeOverrides(defaultTheme, initialTheme ?? {}),
  );

  const updateTheme = (nextTheme: MantineThemeOverride) => {
    const updated = mergeThemeOverrides(theme, nextTheme);
    setTheme(updated);
    void saveTheme(updated);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <MantineProvider defaultColorScheme={initialColorScheme} theme={theme}>
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}
