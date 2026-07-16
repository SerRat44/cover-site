import { createTheme } from "@mantine/core";

export type ColorTarget = "primary" | "secondary";

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

export const defaultTheme = createTheme({
  primaryColor: themeColorValues[0],
  other: {
    secondaryColor: themeColorValues[1],
  },
});

export type NavbarTypes = "header" | "sidebar";
