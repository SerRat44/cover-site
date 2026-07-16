"use server";

import { cookies } from "next/headers";
import { cache } from "react";
import type { MantineColorScheme, MantineThemeOverride } from "@mantine/core";
import { defaultTheme, type NavbarTypes } from "@/types/user-settings";

export interface userSettingsProps {
  colorScheme: Exclude<MantineColorScheme, "auto">;
  theme: MantineThemeOverride;
  navbarType: NavbarTypes;
}

const USER_SETTINGS_COOKIE = "user-settings";
const COOKIE_OPTIONS = {
  path: "/",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 365,
};

const DEFAULT_SETTINGS: userSettingsProps = {
  colorScheme: "dark",
  theme: defaultTheme,
  navbarType: "header",
};

export async function saveUserSettings(
  newUserSettings: Partial<userSettingsProps>,
) {
  const cookieStore = await cookies();

  let currentSettings = DEFAULT_SETTINGS;
  try {
    const rawData = cookieStore.get(USER_SETTINGS_COOKIE)?.value;
    if (rawData) {
      currentSettings = JSON.parse(rawData);
    }
  } catch {}

  const updatedSettings: userSettingsProps = {
    ...currentSettings,
    ...newUserSettings,
  };

  cookieStore.set(
    USER_SETTINGS_COOKIE,
    JSON.stringify(updatedSettings),
    COOKIE_OPTIONS,
  );
}

export const loadUserSettings = cache(async (): Promise<userSettingsProps> => {
  const cookieStore = await cookies();
  const rawData = cookieStore.get(USER_SETTINGS_COOKIE)?.value;

  if (!rawData) {
    return DEFAULT_SETTINGS;
  }

  try {
    const parsed = JSON.parse(rawData);
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
    };
  } catch (error) {
    console.error(
      "Failed to parse user settings cookie, resetting to defaults:",
      error,
    );
    return DEFAULT_SETTINGS;
  }
});
