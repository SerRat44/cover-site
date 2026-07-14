import { useMantineColorScheme, Box, Switch } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

export function ModeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box>
      <Switch
        size="lg"
        checked={colorScheme === "dark"}
        onLabel={<TbMoon size="94%" />}
        offLabel={<TbSun size="94%" />}
        onChange={() => toggleColorScheme()}
      />
    </Box>
  );
}
