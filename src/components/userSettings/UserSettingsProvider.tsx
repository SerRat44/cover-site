"use client";

import React, {
  createContext,
  useContext,
  useState,
  useTransition,
} from "react";
import {
  MantineProvider,
  mergeThemeOverrides,
  type MantineThemeOverride,
  type MantineColorScheme,
} from "@mantine/core";
import { defaultTheme } from "@/types/user-settings";
import {
  saveUserSettings,
  type userSettingsProps,
} from "@/app/actions/userSettings";
import type { NavbarTypes } from "@/types/user-settings";

interface UserSettingsContextType {
  colorScheme: Exclude<MantineColorScheme, "auto">;
  theme: MantineThemeOverride;
  navbarType: NavbarTypes;
  isSaving: boolean;
  updateSettings: (updates: Partial<userSettingsProps>) => void;
}

interface UserSettingsProviderProps {
  children: React.ReactNode;
  initialUserSettings: userSettingsProps;
}

const UserSettingsContext = createContext<UserSettingsContextType | undefined>(
  undefined,
);

export function useUserSettings() {
  const context = useContext(UserSettingsContext);
  if (!context) {
    throw new Error(
      "useUserSettings must be used within a UserSettingsProvider",
    );
  }
  return context;
}

export function UserSettingsProvider({
  children,
  initialUserSettings,
}: UserSettingsProviderProps) {
  const [isSaving, startTransition] = useTransition();
  const [colorScheme, setColorScheme] = useState<
    Exclude<MantineColorScheme, "auto">
  >(initialUserSettings.colorScheme);
  const [navbarType, setNavbarType] = useState<NavbarTypes>(
    initialUserSettings.navbarType,
  );
  const [theme, setTheme] = useState<MantineThemeOverride>(() =>
    mergeThemeOverrides(defaultTheme, initialUserSettings.theme),
  );

  const updateSettings = (updates: Partial<userSettingsProps>) => {
    if (updates.colorScheme !== undefined) {
      setColorScheme(updates.colorScheme);
    }
    if (updates.navbarType !== undefined) {
      setNavbarType(updates.navbarType);
    }
    if (updates.theme !== undefined) {
      setTheme((prevTheme) => mergeThemeOverrides(prevTheme, updates.theme!));
    }

    startTransition(async () => {
      try {
        await saveUserSettings(updates);
      } catch (error) {
        console.error("Failed to persist user settings to cookies:", error);
      }
    });
  };

  return (
    <UserSettingsContext.Provider
      value={{ colorScheme, theme, navbarType, isSaving, updateSettings }}
    >
      <MantineProvider forceColorScheme={colorScheme} theme={theme}>
        {children}
      </MantineProvider>
    </UserSettingsContext.Provider>
  );
}
