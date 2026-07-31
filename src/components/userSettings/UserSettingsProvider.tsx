"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useTransition,
  useEffect,
} from "react";
import { DEFAULT_THEME, MantineProvider, createTheme } from "@mantine/core";
import { DEFAULT_SETTINGS, UserSettingsProps } from "@/lib/settingsShared";
import { saveUserSettings } from "@/app/actions/userSettings";

interface UserSettingsContextType {
  settings: UserSettingsProps;
  isSaving: boolean;
  updateSettings: (updates: Partial<UserSettingsProps>) => void;
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

function syncHtmlDataset(settings: UserSettingsProps) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  root.dataset.sidebarCollapsed = String(Boolean(settings.sidebarCollapsed));
  root.dataset.rightPaged = String(Boolean(settings.rightPaged));

  if (settings.primaryColor) {
    root.dataset.primaryColor = settings.primaryColor;
  }
  if (settings.secondaryColor) {
    root.dataset.secondaryColor = settings.secondaryColor;
  }
}

export function UserSettingsProvider({
  children,
  initialSettings = DEFAULT_SETTINGS,
}: {
  children: React.ReactNode;
  initialSettings?: UserSettingsProps;
}) {
  const [settings, setSettings] = useState(initialSettings);
  const [isSaving, startTransition] = useTransition();

  useEffect(() => {
    syncHtmlDataset(settings);
  }, [settings]);

  const theme = useMemo(() => {
    return createTheme({
      primaryColor: settings.primaryColor,
      colors: {
        primary:
          DEFAULT_THEME.colors[
            settings.primaryColor as keyof typeof DEFAULT_THEME.colors
          ],
        secondary:
          DEFAULT_THEME.colors[
            settings.secondaryColor as keyof typeof DEFAULT_THEME.colors
          ],
      },
    });
  }, [settings.primaryColor, settings.secondaryColor]);

  const updateSettings = (updates: Partial<UserSettingsProps>) => {
    setSettings((prev) => {
      const next = { ...prev, ...updates };
      syncHtmlDataset(next);
      return next;
    });

    startTransition(() => {
      saveUserSettings(updates);
    });
  };

  return (
    <UserSettingsContext.Provider
      value={{
        settings,
        isSaving,
        updateSettings,
      }}
    >
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {children}
      </MantineProvider>
    </UserSettingsContext.Provider>
  );
}
