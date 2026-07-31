import { Box, Text, Paper, Flex } from "@mantine/core";

export function Footer() {
  return (
    <Box id="app-footer">
      <Paper className="footer-paper" radius={0}>
        <Flex p="sm">
          <Text>Test Footer!!!</Text>
        </Flex>
      </Paper>
    </Box>
  );
}
