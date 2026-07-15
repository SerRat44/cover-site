import { Group } from "@mantine/core";
import { ModeSwitch } from "@/components/themeConfig/ModeSwitch";
import { ColorSelectButton } from "@/components/themeConfig/ColorSelect";

export function ThemeGroup() {
  return (
    <Group gap="md" w="min" align="center" justify="center">
      <ColorSelectButton />
      <ModeSwitch />
    </Group>
  );
}
