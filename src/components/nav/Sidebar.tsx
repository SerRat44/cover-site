"use client";

import { Box, Flex, Paper, Transition, ScrollArea } from "@mantine/core";
import { useUserSettings } from "../userSettings/UserSettingsProvider";
import { useStickyBounds } from "@/hooks/useStickyBounds";

export function Sidebar() {
  const { sidebarActive } = useUserSettings();
  const { ref, ready } = useStickyBounds<HTMLDivElement>({
    scrollContainerId: "app-scroll-viewport",
    boundarySelector: "[data-app-footer]",
  });

  return (
    <Transition
      mounted={sidebarActive}
      transition="slide-right"
      duration={180}
      timingFunction="linear"
    >
      {(transitionStyles) => (
        <Box style={transitionStyles}>
          <Flex
            ref={ref}
            miw="200px"
            maw="240px"
            w="20%"
            ml={6}
            style={{
              position: "sticky",
              top: 10,
              alignSelf: "flex-start",
              willChange: "height, opacity",
              opacity: ready ? 1 : 0,
              transition: "opacity 140ms ease",
            }}
          >
            <Paper flex={1} className="sidebar-paper" radius="md">
              <ScrollArea
                flex={1}
                scrollbars="y"
                offsetScrollbars
                scrollbarSize={6}
              >
                <Flex>{/* Sidebar content items go here */}</Flex>
              </ScrollArea>
            </Paper>
          </Flex>
        </Box>
      )}
    </Transition>
  );
}
