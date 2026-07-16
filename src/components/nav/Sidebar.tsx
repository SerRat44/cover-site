
import { Box, Flex, ActionIcon, Paper } from "@mantine/core";
import { ThemeGroup } from "@/components/userSettings/ThemeGroup";
import { TbLayoutSidebar, TbLayoutNavbar } from "react-icons/tb";
import type { NavbarTypes } from "@/types/user-settings";

export function Sidebar({ selected, onToggle }: NavProps) {
  return (
    <Box className="sidebar-container">
      <Paper className="sidebar-bar" radius="md" p="md">
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          h="100%"
          w="100%"
        >
          <SwitchNavbarButton selected={selected} onToggle={onToggle} />
          <ThemeGroup />
        </Flex>
      </Paper>
    </Box>
  );
}