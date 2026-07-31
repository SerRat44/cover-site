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
import { UserSettingsProvider } from "@/components/userSettings/UserSettingsProvider";
import { Header, LazySidebar } from "@/components/nav";
import { Footer } from "@/components/Footer";
import { loadUserSettings } from "@/app/actions/userSettings";
import PartytownHead from "@/components/PartytownHead";

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
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <PartytownHead />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/partytown"
          src="https://cdn.vercel-insights.com/v1/script.js"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/partytown"
          src="https://static.vercel-insights.com/v1/script.js"
        />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <UserSettingsProvider initialSettings={settings}>
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
                  <LazySidebar />
                  <Flex direction="column" p="md">
                    <main>{children}</main>
                  </Flex>
                </Flex>
                <Footer />
              </Flex>
            </ScrollArea>
          </Flex>
        </UserSettingsProvider>
      </body>
    </html>
  );
}
