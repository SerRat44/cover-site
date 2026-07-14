import { Box, Flex, Paper } from "@mantine/core";
import { ThemeConfig } from "@/components/ThemeConfig/ThemeConfig";

export function Header() {
  return (
    <Box>
      <Paper className="altBg">
        <Flex p="sm" dir="row" justify="space-between">
          <Box />
          <ThemeConfig />
        </Flex>
      </Paper>
    </Box>
  );
}
