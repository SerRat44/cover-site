import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, mantineHtmlProps, Box } from "@mantine/core";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ProviderWrapper } from "@/components/themeConfig/ProviderWrapper";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { loadColorScheme, loadTheme } from "@/app/actions/theme";

export const metadata: Metadata = {
  title: "Cover Site",
  description:
    "SerRat44's cover site showing off various styles and techniques.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialColorScheme = await loadColorScheme();
  const initialTheme = await loadTheme();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={initialColorScheme} />
      </head>
      <body>
        <ProviderWrapper
          initialColorScheme={initialColorScheme}
          initialTheme={initialTheme}
        >
          <main>
            <Box className="main-root">
              <Header />
              <Box className="main-content">
                {children}
                <Footer />
              </Box>
            </Box>
          </main>
        </ProviderWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
