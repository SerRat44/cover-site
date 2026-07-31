// app/layout.tsx
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
import { UserSettingsShell } from "@/components/userSettings/UserSettingsShell";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Header, Sidebar } from "@/components/nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cover Site",
  description:
    "SerRat44's cover site showing off various styles and techniques.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <UserSettingsShell>
          <Flex direction="column" h="100dvh">
            <Header />

            <ScrollArea flex={1} scrollbars="y" scrollbarSize={8}>
              <Flex direction="column" mih="100%">
                <Flex pos="relative">
                  <Sidebar />

                  <Flex
                    component="main"
                    p="md"
                    direction="column"
                    style={{ minWidth: 0 }}
                  >
                    {children}
                  </Flex>
                </Flex>

                <Footer />
              </Flex>
            </ScrollArea>
          </Flex>
        </UserSettingsShell>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
