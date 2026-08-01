"use client";

import { Flex, ScrollArea, Button, Stack } from "@mantine/core";
import Link from "next/link";
import { pageConfig, PageConfigProps } from "@/configs/pageConfig";

function NavButton({ page }: { page: PageConfigProps }) {
  return (
    <Button
      fullWidth
      variant="default"
      component={Link}
      href={page.route}
      aria-label={`Navigate to ${page.name}`}
    >
      {page.name}
    </Button>
  );
}

export function Sidebar() {
  return (
    <Flex direction="column" component="aside" className="sidebar front-bg">
      <ScrollArea scrollbars="y" scrollbarSize={6}>
        <Stack p="xs" gap={4}>
          {pageConfig.map((page) => (
            <NavButton key={page.route} page={page} />
          ))}
        </Stack>
      </ScrollArea>
    </Flex>
  );
}
