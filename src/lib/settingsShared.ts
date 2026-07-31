export const USER_SETTINGS_COOKIE = "user-settings";
export const COLOR_SCHEME_COOKIE = "color-scheme";

export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export interface UserSettingsProps {
  primaryColor: string;
  secondaryColor: string;
  sidebarCollapsed: boolean;
}

export const DEFAULT_SETTINGS: UserSettingsProps = {
  primaryColor: "pink",
  secondaryColor: "grape",
  sidebarCollapsed: true,
};

export const themeColorValues = [
  "blue",
  "grape",
  "pink",
  "red",
  "orange",
  "yellow",
  "green",
] as const;

export type ThemeColorValues = (typeof themeColorValues)[number];

export type ColorTarget = "primary" | "secondary";
