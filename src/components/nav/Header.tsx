import { Box, Flex, ActionIcon, Paper } from "@mantine/core";
import { ThemeGroup } from "@/components/userSettings/ThemeGroup";
import { TbLayoutSidebar, TbLayoutNavbar } from "react-icons/tb";
import type { NavbarTypes } from "@/types/user-settings";

export function Header({ selected, onToggle }: NavProps) {
  return (
    <Box className="header-bar">
      <Flex
        px="md"
        direction="row"
        justify="space-between"
        align="center"
        h="100%"
      >
        <SwitchNavbarButton selected={selected} onToggle={onToggle} />
        <ThemeGroup />
      </Flex>
    </Box>
  );
}
