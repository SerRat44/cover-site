"use server";

import { cookies } from "next/headers";
import { cache } from "react";
import type { MantineColorScheme, MantineThemeOverride } from "@mantine/core";

const THEME_COOKIE = "theme-config";
const COLOR_SCHEME_COOKIE = "color-scheme";

function getCookieOptions() {
  return {
    path: "/",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 365,
  };
}

export async function saveTheme(theme: MantineThemeOverride) {
  const cookieStore = await cookies();
  cookieStore.set(
    THEME_COOKIE,
    encodeURIComponent(JSON.stringify(theme)),
    getCookieOptions(),
  );
}

export const loadTheme = cache(
  async (): Promise<MantineThemeOverride | undefined> => {
    const cookieStore = await cookies();
    const value = cookieStore.get(THEME_COOKIE)?.value;
    if (!value) return undefined;

    try {
      const parsed = JSON.parse(decodeURIComponent(value));
      return (parsed as MantineThemeOverride) ? parsed : undefined;
    } catch {
      return undefined;
    }
  },
);

export async function saveColorScheme(
  colorScheme: Exclude<MantineColorScheme, "auto">,
) {
  const cookieStore = await cookies();
  cookieStore.set(
    COLOR_SCHEME_COOKIE,
    encodeURIComponent(JSON.stringify(colorScheme)),
    getCookieOptions(),
  );
}

export const loadColorScheme = cache(
  async (): Promise<Exclude<MantineColorScheme, "auto">> => {
    const cookieStore = await cookies();
    const value = cookieStore.get(COLOR_SCHEME_COOKIE)?.value;
    if (!value) return "dark";

    try {
      const parsed = JSON.parse(decodeURIComponent(value));
      return (parsed as Exclude<MantineColorScheme, "auto">) ? parsed : "dark";
    } catch {
      return "dark";
    }
  },
);
