"use client";

import { ActionIcon, Popover } from "@mantine/core";
import { TbPalette } from "react-icons/tb";
import ColorSelect from "./ColorSelect";

export function ColorSelectButton() {
  return (
    <Popover>
      <Popover.Target>
        <ActionIcon
          variant="filled"
          aria-label="Toggle theme customization"
          h="100%"
          w="auto"
        >
          <TbPalette className="icon" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="front-bg">
        <ColorSelect />
      </Popover.Dropdown>
    </Popover>
  );
}
