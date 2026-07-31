// components/nav/Sidebar.tsx
"use client";

import { Box, Paper, ScrollArea } from "@mantine/core";
import { useUserSettings } from "../userSettings/UserSettingsProvider";
import { useStickyBounds } from "@/hooks/useStickyBounds";

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
          <ScrollArea
            h="100%"
            scrollbars="y"
            offsetScrollbars
            scrollbarSize={6}
          >
            <Box p="sm">{/* Sidebar Navigation */}</Box>
          </ScrollArea>
        </Paper>
      </Box>
    </Box>
  );
}
