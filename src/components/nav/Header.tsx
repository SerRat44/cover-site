import { Flex, Group } from "@mantine/core";
import { SidebarToggle } from "./SidebarToggle";
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
      p="sm"
      className="header paper orientation"
    >
      <SidebarToggle />
      <Group
        className="orientation"
        gap="sm"
        w="min"
        align="center"
        justify="center"
      >
        <OrientationToggle />
        <ColorSelectButton />
        <ModeToggle />
      </Group>
    </Flex>
  );
}
