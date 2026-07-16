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
  type CSSVariablesResolver,
} from "@mantine/core";
import { defaultTheme } from "@/components/userSettings/userSettingTypes";
import {
  saveUserSettings,
  type UserSettingsProps,
} from "@/app/actions/userSettings";

interface UserSettingsContextType extends UserSettingsProps {
  colorScheme: Exclude<MantineColorScheme, "auto">;
  theme: MantineThemeOverride;
  sidebarActive: boolean;
  isSaving: boolean;
  updateSettings: (updates: Partial<UserSettingsProps>) => void;
}

interface UserSettingsProviderProps {
  children: React.ReactNode;
  initialUserSettings: UserSettingsProps;
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

const resolver: CSSVariablesResolver = (theme) => {
  const secondaryColor = theme.other?.secondaryColor || "grape";
  return {
    variables: {},
    light: {
      "--mantine-color-default-border": `var(--mantine-color-${secondaryColor}-4)`,
    },
    dark: {
      "--mantine-color-default-border": `var(--mantine-color-${secondaryColor}-8)`,
    },
  };
};

export function UserSettingsProvider({
  children,
  initialUserSettings,
}: UserSettingsProviderProps) {
  const [isSaving, startTransition] = useTransition();
  const [colorScheme, setColorScheme] = useState<
    Exclude<MantineColorScheme, "auto">
  >(initialUserSettings.colorScheme);
  const [sidebarActive, setSidebarActive] = useState<boolean>(
    initialUserSettings.sidebarActive,
  );
  const [theme, setTheme] = useState<MantineThemeOverride>(() =>
    mergeThemeOverrides(defaultTheme, initialUserSettings.theme),
  );

  const updateSettings = (updates: Partial<UserSettingsProps>) => {
    if (updates.colorScheme !== undefined) {
      setColorScheme(updates.colorScheme);
    }
    if (updates.sidebarActive !== undefined) {
      setSidebarActive(updates.sidebarActive);
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
      value={{ colorScheme, theme, sidebarActive, isSaving, updateSettings }}
    >
      <MantineProvider
        forceColorScheme={colorScheme}
        theme={theme}
        cssVariablesResolver={resolver}
      >
        {children}
      </MantineProvider>
    </UserSettingsContext.Provider>
  );
}
