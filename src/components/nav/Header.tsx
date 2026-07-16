import { Box, Flex, Paper } from "@mantine/core";
import { SidebarToggle } from "./SidebarToggle";
import { ThemeGroup } from "../userSettings/ThemeGroup";

export function Header() {
  return (
    <Box>
      <Paper className="header-paper">
        <Flex direction="row" justify="space-between" align="center" p={8}>
          <SidebarToggle />
          <ThemeGroup />
        </Flex>
      </Paper>
    </Box>
  );
}
