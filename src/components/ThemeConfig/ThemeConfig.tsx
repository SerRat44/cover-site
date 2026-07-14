"use client";

import { Box, Group, ActionIcon, HoverCard } from "@mantine/core";
import { TbPalette } from "react-icons/tb";
import { ModeSwitch } from "@/components/themeConfig/ModeSwitch";
import { ColorPicker } from "@/components/themeConfig/ColorPicker";

export function ThemeConfig() {
  return (
    <Box>
      <Group gap="md">
        <HoverCard>
          <HoverCard.Target>
            <ActionIcon variant="outline" size="lg">
              <TbPalette size={"94%"} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <ColorPicker />
          </HoverCard.Dropdown>
        </HoverCard>
        <ModeSwitch />
      </Group>
    </Box>
  );
}
