"use client";

import React, { createContext, useContext, useState } from "react";
import {
  MantineProvider,
  mergeThemeOverrides,
  type MantineThemeOverride,
  MantineColorScheme,
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
  initialColorScheme?: Exclude<MantineColorScheme, "auto">;
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
  initialTheme = defaultTheme,
  initialColorScheme = "dark",
}: ProviderWrapperProps) {
  const [currentTheme, setCurrentTheme] = useState<MantineThemeOverride>(() =>
    mergeThemeOverrides(defaultTheme, initialTheme),
  );

  const updateTheme = (nextTheme: MantineThemeOverride) => {
    const updated = mergeThemeOverrides(currentTheme, nextTheme);
    setCurrentTheme(updated);
    void saveTheme(updated);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        updateTheme,
      }}
    >
      <MantineProvider
        forceColorScheme={initialColorScheme}
        theme={currentTheme}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}
