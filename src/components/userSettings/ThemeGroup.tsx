import { Group } from "@mantine/core";
import { ModeSwitch } from "./ModeSwitch";
import { ColorSelectButton } from "./ColorSelectButton";

export function ThemeGroup() {
  return (
    <Group gap="md" w="min" align="center" justify="center">
      <ColorSelectButton />
      <ModeSwitch />
    </Group>
  );
}
