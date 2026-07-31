"use client";

import { Switch, Box, useMantineColorScheme } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

export function ModeSwitch() {
  const { toggleColorScheme } = useMantineColorScheme();

  const getColorScheme = () => {
    if (typeof document === "undefined") return "light";
    return (
      document.documentElement.getAttribute("data-mantine-color-scheme") ||
      "light"
    );
  };

  const currentScheme = getColorScheme();
  const isLight = currentScheme === "light";

  return (
    <Box>
      <Switch
        size="lg"
        checked={isLight}
        onChange={toggleColorScheme}
        onLabel={<TbSun size="94%" />}
        offLabel={<TbMoon size="94%" />}
      />
    </Box>
  );
}
