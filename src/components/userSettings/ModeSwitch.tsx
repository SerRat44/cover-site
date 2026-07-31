"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

export function ModeSwitch() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="outline"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <TbMoon className="mantine-light-hidden" size="92%" />

      <TbSun className="mantine-dark-hidden" size="92%" />
    </ActionIcon>
  );
}
