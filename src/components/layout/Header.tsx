import { Box, Flex } from "@mantine/core";
import { ThemeConfig } from "@/components/ThemeConfig/ThemeConfig";

export function Header() {
  return (
    <Box className="altBg" style={{ borderBottom: `1px solid` }}>
      <Flex p="sm" dir="row" justify="space-between">
        <Box />
        <ThemeConfig />
      </Flex>
    </Box>
  );
}
