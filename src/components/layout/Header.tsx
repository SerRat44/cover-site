import { Box, Flex } from "@mantine/core";
import { ThemeGroup } from "@/components/themeConfig/ThemeGroup";

export function Header() {
  return (
    <Box className="altBg" style={{ borderBottom: `1px solid` }}>
      <Flex p="sm" dir="row" justify="space-between">
        <Box />
        <ThemeGroup />
      </Flex>
    </Box>
  );
}
