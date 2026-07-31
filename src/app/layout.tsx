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
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { UserSettingsProvider } from "@/components/userSettings";
import { Header, Sidebar } from "@/components/nav";
import { Footer } from "@/components/Footer";
import { loadUserSettings } from "@/app/actions/userSettings";

export const metadata: Metadata = {
  title: "Cover Site",
  description:
    "SerRat44's cover site showing off various styles and techniques.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await loadUserSettings();

  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-right-paged={String(Boolean(settings.rightPaged))}
      data-sidebar-collapsed={String(Boolean(settings.sidebarCollapsed))}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>

      <body>
        <UserSettingsProvider initialSettings={settings}>
          <Flex mih="100dvh" h="100%" direction="column">
            <Header />

            <Flex
              className="orientation"
              flex={1}
              style={{ overflow: "hidden", position: "relative" }}
            >
              <Sidebar />
              <ScrollArea
                className="scrollarea"
                scrollbars="y"
                scrollbarSize={8}
                style={{ flex: 1, width: "100%" }}
                viewportProps={{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Flex
                  className="scrollarea-content"
                  flex={1}
                  w="100%"
                  direction="column"
                >
                  <main className="main">{children}</main>
                  <Footer />
                </Flex>
              </ScrollArea>
            </Flex>
          </Flex>
        </UserSettingsProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
