import dynamic from "next/dynamic";
import { ActionIcon, Popover } from "@mantine/core";
import { TbPalette } from "react-icons/tb";

const ColorSelect = dynamic(() => import("./ColorSelect"));

export function ColorSelectButton() {
  return (
    <Popover withArrow>
      <Popover.Target>
        <ActionIcon variant="outline" size="lg">
          <TbPalette size="94%" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <ColorSelect />
      </Popover.Dropdown>
    </Popover>
  );
}
