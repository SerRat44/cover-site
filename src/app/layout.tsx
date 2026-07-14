import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  ScrollArea,
  Flex,
} from "@mantine/core";
import { ProviderWrapper } from "@/components/ThemeConfig/ProviderWrapper";
import { loadTheme, loadColorScheme } from "@/app/actions/theme";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Example Site",
  description: "An example site built with nextjs.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialColorScheme = await loadColorScheme();
  const initialTheme = await loadTheme();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript forceColorScheme={initialColorScheme} />
      </head>
      <body>
        <ProviderWrapper
          initialTheme={initialTheme}
          initialColorScheme={initialColorScheme}
        >
          <main>
            <Flex direction="column" h="100dvh">
              <Header />
              <ScrollArea flex={1} type="auto" offsetScrollbars="present">
                <Flex direction="column" mih="100dvh">
                  {children}
                </Flex>
                <Footer />
              </ScrollArea>
            </Flex>
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
