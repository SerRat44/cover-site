import { Flex, Group } from "@mantine/core";
import { SidebarToggle } from "./nav/SidebarToggle";
import cs from "clsx";
import {
  ModeToggle,
  ColorSelectButton,
  OrientationToggle,
} from "@/components/userSettings";

export function Header() {
  return (
    <Flex
      justify="space-between"
      align="center"
      p={8}
      h={{ base: "50", md: "60" }}
      className="header front-bg orientation"
    >
      <SidebarToggle />
      <Flex
        className="orientation"
        gap="sm"
        h="100%"
        w="max-content"
        flex="shrink"
      >
        <OrientationToggle />
        <ColorSelectButton />
        <ModeToggle />
      </Flex>
    </Flex>
  );
}
