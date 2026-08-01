"use client";

import { Flex, Container, Stack } from "@mantine/core";
import { Introduction } from "@/components/resume/Introduction";

export default function Home() {
  return (
    <Stack my={{ base: "lg", md: "xl" }}>
      <Introduction />
    </Stack>
  );
}
