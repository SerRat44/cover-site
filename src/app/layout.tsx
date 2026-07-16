import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  Flex,
  ScrollArea,
} from "@mantine/core";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { UserSettingsProvider } from "@/components/userSettings/UserSettingsProvider";
import { loadUserSettings } from "@/app/actions/userSettings";
import { Header, Sidebar } from "@/components/nav";
import { Footer } from "@/components/Footer";

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
          <Flex direction="column" h="100%" mah="100dvh">
            <Header />
            <ScrollArea
              id="app-scroll-viewport"
              flex={1}
              scrollbars="y"
              scrollbarSize={8}
            >
              <Flex direction="column">
                <Flex direction="row">
                  <Sidebar />
                  <Flex direction="column" p="md">
                    <main>{children}</main>
                  </Flex>
                </Flex>
                <Footer />
              </Flex>
            </ScrollArea>
          </Flex>
        </UserSettingsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
