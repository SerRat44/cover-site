"use client";

import { ActionIcon, Popover } from "@mantine/core";
import { TbPalette } from "react-icons/tb";
import ColorSelect from "./ColorSelect";

export function ColorSelectButton() {
  return (
    <Popover>
      <Popover.Target>
        <ActionIcon variant="outline" size="lg">
          <TbPalette size="94%" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="color-select-popover">
        <ColorSelect />
      </Popover.Dropdown>
    </Popover>
  );
}
