import { createTheme, virtualColor } from "@mantine/core";

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

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
