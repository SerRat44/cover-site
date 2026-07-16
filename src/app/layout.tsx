import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, mantineHtmlProps, Box } from "@mantine/core";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { UserSettingsProvider } from "@/components/userSettings/UserSettingsProvider";
import { LayoutShell } from "@/components/LayoutShell";
import { loadUserSettings } from "@/app/actions/userSettings";

export const metadata: Metadata = {
  title: "Cover Site",
  description:
    "SerRat44's cover site showing off various styles and techniques.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialUserSettings = await loadUserSettings();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript forceColorScheme={initialUserSettings.colorScheme} />
      </head>
      <body>
        <UserSettingsProvider initialUserSettings={initialUserSettings}>
          <Box className="base">
            <LayoutShell>{children}</LayoutShell>
          </Box>
        </UserSettingsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
