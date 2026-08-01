import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  mantineHtmlProps,
  Flex,
  ScrollArea,
  Box,
  Container,
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
          <main>
            <Flex h="100dvh" direction="column">
              <Header />

              <Flex
                className="orientation"
                flex={1}
                pos="relative"
                style={{ minHeight: 0 }}
              >
                <Sidebar />

                <ScrollArea
                  className="scrollarea"
                  scrollbars="y"
                  scrollbarSize={8}
                  flex={1}
                  type="auto"
                  classNames={{
                    viewport: "scrollarea-content",
                  }}
                >
                  <Box
                    mih={{
                      base: "calc(100dvh - 50px)",
                      md: "calc(100dvh - 60px)",
                    }}
                  >
                    {children}
                  </Box>
                  <Footer />
                </ScrollArea>
              </Flex>
            </Flex>
          </main>
        </UserSettingsProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
