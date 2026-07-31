"use client";

import { ActionIcon } from "@mantine/core";
import {
  TbLayoutSidebar,
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRight,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { useUserSettings } from "@/components/userSettings";

export const SidebarToggle = () => {
  const { settings, updateSettings } = useUserSettings();

  const handleClick = () => {
    updateSettings({ sidebarCollapsed: !settings.sidebarCollapsed });
  };

  const Icon = settings.sidebarCollapsed
    ? settings.rightPaged
      ? TbLayoutSidebarRight
      : TbLayoutSidebar
    : settings.rightPaged
      ? TbLayoutSidebarRightCollapse
      : TbLayoutSidebarLeftCollapse;

  return (
    <ActionIcon
      onClick={handleClick}
      variant="subtle"
      size="lg"
      aria-label="Toggle sidebar"
    >
      <Icon className="icon" />
    </ActionIcon>
  );
};
