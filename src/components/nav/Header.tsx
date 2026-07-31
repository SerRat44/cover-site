import { Box, Flex, Paper } from "@mantine/core";
import { SidebarToggle } from "./SidebarToggle";
import { ThemeGroup } from "../userSettings/ThemeGroup";

export function Header() {
  return (
    <Box id="app-header">
      <Paper className="header-paper" radius={0}>
        <Flex direction="row" justify="space-between" align="center" p="xs">
          <SidebarToggle />
          <ThemeGroup />
        </Flex>
      </Paper>
    </Box>
  );
}
