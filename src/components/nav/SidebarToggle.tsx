"use client";

import { ActionIcon } from "@mantine/core";
import { TbLayoutSidebar, TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useUserSettings } from "../userSettings/UserSettingsProvider";

export const SidebarToggle = () => {
  const { sidebarActive, updateSettings } = useUserSettings();

  const handleClick = () => {
    updateSettings({ sidebarActive: !sidebarActive });
  };

  return (
    <ActionIcon onClick={handleClick} variant="subtle" size="lg">
      {sidebarActive ? (
        <TbLayoutSidebarLeftCollapse size="96%" />
      ) : (
        <TbLayoutSidebar size="96%" />
      )}
    </ActionIcon>
  );
};
