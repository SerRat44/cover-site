"use client";

import { useMantineColorScheme, Box, Switch } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";
import { useUserSettings } from "./UserSettingsProvider";

export function ModeSwitch() {
  const { toggleColorScheme } = useMantineColorScheme();
  const { colorScheme, updateSettings } = useUserSettings();

  const handleToggle = () => {
    const nextScheme = colorScheme === "dark" ? "light" : "dark";
    toggleColorScheme();
    updateSettings({ colorScheme: nextScheme });
  };

  return (
    <Box>
      <Switch
        size="lg"
        checked={colorScheme === "dark"}
        onLabel={<TbMoon size="94%" />}
        offLabel={<TbSun size="94%" />}
        onChange={handleToggle}
      />
    </Box>
  );
}
