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
          size="lg"
          aria-label="Toggle theme customization"
        >
          <TbPalette size="92%" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="color-select-popover">
        <ColorSelect />
      </Popover.Dropdown>
    </Popover>
  );
}
