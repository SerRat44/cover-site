"use server";

import { cookies } from "next/headers";
import {
  UserSettingsProps,
  USER_SETTINGS_COOKIE,
  DEFAULT_SETTINGS,
} from "@/lib/settingsShared";

export async function saveUserSettings(
  newSettings: Partial<UserSettingsProps>,
) {
  const currentSettings = await loadUserSettings();

  const next = {
    ...currentSettings,
    ...newSettings,
  };

  const store = await cookies();

  store.set(USER_SETTINGS_COOKIE, JSON.stringify(next));
}

export async function loadUserSettings(): Promise<UserSettingsProps> {
  const store = await cookies();

  const settings = store.get(USER_SETTINGS_COOKIE)?.value;

  return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
}
