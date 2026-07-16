"use client";

import React from "react";
import { Box } from "@mantine/core";
import { Navbar, Sidebar } from "./nav/SidebarToggle";
import { Footer } from "@/components/Footer";
import { useUserSettings } from "@/components/userSettings/UserSettingsProvider";

interface LayoutShellProps {
  children: React.ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <Box className="shell-root">
      <Navbar selected={navbarType} onToggle={handleToggle} />

      <Box className="main-content">
        <Sidebar selected={navbarType} onToggle={handleToggle} />
        <Box style={{ flex: 1 }}>
          {children}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
