"use client";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

export function ModeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="subtle"
      aria-label="Toggle color scheme"
      h="100%"
      w="auto"
    >
      <TbSun className="icon dark-only" />
      <TbMoon className="icon light-only" />
    </ActionIcon>
  );
}
