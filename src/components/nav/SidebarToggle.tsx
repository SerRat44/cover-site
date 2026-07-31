"use client";

import { ActionIcon } from "@mantine/core";
import { TbLayoutSidebar, TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useUserSettings } from "../userSettings/UserSettingsProvider";

export const SidebarToggle = () => {
  const { settings, updateSettings } = useUserSettings();

  const handleClick = () => {
    updateSettings({ sidebarCollapsed: !settings.sidebarCollapsed });
  };

  return (
    <ActionIcon
      onClick={handleClick}
      variant="subtle"
      size="lg"
      aria-label="Toggle sidebar"
    >
      {!settings.sidebarCollapsed ? (
        <TbLayoutSidebarLeftCollapse size="94%" />
      ) : (
        <TbLayoutSidebar size="92%" />
      )}
    </ActionIcon>
  );
};
