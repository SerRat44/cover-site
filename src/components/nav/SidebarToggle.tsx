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
    <ActionIcon onClick={handleClick} variant="subtle" size="lg">
      {!settings.sidebarCollapsed ? (
        <TbLayoutSidebarLeftCollapse size="96%" />
      ) : (
        <TbLayoutSidebar size="96%" />
      )}
    </ActionIcon>
  );
};
