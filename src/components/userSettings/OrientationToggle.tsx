"use client";

import { ActionIcon } from "@mantine/core";
import { TbAlignLeft2, TbAlignRight2 } from "react-icons/tb";
import { useUserSettings } from "@/components/userSettings";

export function OrientationToggle() {
  const { settings, updateSettings } = useUserSettings();

  const handleClick = () => {
    updateSettings({ rightPaged: !settings.rightPaged });
  };

  const Icon = settings.rightPaged ? TbAlignLeft2 : TbAlignRight2;

  return (
    <ActionIcon
      onClick={handleClick}
      variant="transparent"
      size="lg"
      aria-label="Toggle page orientation"
    >
      <Icon className="icon" />
    </ActionIcon>
  );
}
