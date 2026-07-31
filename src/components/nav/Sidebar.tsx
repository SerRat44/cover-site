// components/nav/Sidebar.tsx
"use client";

import { Box, Paper, ScrollArea, Button, Stack } from "@mantine/core";
import { useUserSettings } from "../userSettings/UserSettingsProvider";
import { useStickyBounds } from "@/hooks/useStickyBounds";
import Link from "next/link";
import { pageConfig, PageConfigProps } from "@/configs/pageConfig";

function NavButton({ page }: { page: PageConfigProps }) {
  return (
    <Button
      fullWidth
      variant="default"
      component={Link}
      href={page.route}
      aria-label={`Navigate to ${page.name}`}
    >
      {page.name}
    </Button>
  );
}

export function Sidebar() {
  const { settings } = useUserSettings();

  const { targetRef } = useStickyBounds<HTMLDivElement>({
    topBoundarySelector: "#app-header",
    bottomBoundarySelector: "#app-footer",
  });

  return (
    <Box
      ref={targetRef}
      component="aside"
      className="sidebar"
      data-collapsed={settings.sidebarCollapsed}
    >
      <Box className="sidebar-inner">
        <Paper h="100%" radius={0} className="sidebar-paper">
          <ScrollArea h="100%" scrollbars="y" scrollbarSize={6}>
            <Stack p="xs" gap={4}>
              {pageConfig.map((page) => (
                <NavButton key={page.route} page={page} />
              ))}
            </Stack>
          </ScrollArea>
        </Paper>
      </Box>
    </Box>
  );
}
