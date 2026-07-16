"use client";

import React from "react";
import { Box, Flex, ActionIcon, Paper } from "@mantine/core";
import { ThemeGroup } from "@/components/userSettings/ThemeGroup";
import { TbLayoutSidebar, TbLayoutNavbar } from "react-icons/tb";
import type { NavbarTypes } from "@/types/user-settings";

interface NavProps {
  selected: NavbarTypes;
  onToggle: () => void;
}

export const SwitchNavbarButton = ({ selected, onToggle }: NavProps) => {
  return (
    <ActionIcon onClick={onToggle} variant="subtle" size="lg">
      {selected === "header" ? (
        <TbLayoutSidebar size="96%" />
      ) : (
        <TbLayoutNavbar size="96%" />
      )}
    </ActionIcon>
  );
};
