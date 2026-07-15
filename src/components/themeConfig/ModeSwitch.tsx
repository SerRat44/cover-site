"use client";

import { useMantineColorScheme, Box, Switch } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";
import { saveColorScheme } from "@/app/actions/theme";

export function ModeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const handleToggle = () => {
    const next = colorScheme === "dark" ? "light" : "dark";
    toggleColorScheme();
    void saveColorScheme(next);
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
