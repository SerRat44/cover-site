// components/themeConfig/ThemeConfig.tsx
"use client";

import { useState } from "react";
import { Box, Group, ActionIcon, HoverCard, Skeleton } from "@mantine/core";
import { TbPalette } from "react-icons/tb";
import dynamic from "next/dynamic";
import { ModeSwitch } from "@/components/themeConfig/ModeSwitch";

const ColorPicker = dynamic(
  () =>
    import("@/components/themeConfig/ColorPicker").then((m) => m.ColorPicker),
  { loading: () => <Skeleton height={80} width={280} />, ssr: false },
);

export function ThemeConfig() {
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <Group gap="md">
        <HoverCard onOpen={() => setOpened(true)}>
          <HoverCard.Target>
            <ActionIcon variant="outline" size="lg">
              <TbPalette size="94%" />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>{opened && <ColorPicker />}</HoverCard.Dropdown>
        </HoverCard>
        <ModeSwitch />
      </Group>
    </Box>
  );
}
