"use client";

import { useState } from "react";
import {
  themeColorValues,
  ColorTarget,
  type ThemeColorValues,
} from "@/components/userSettings/userSettingTypes";
import {
  createTheme,
  Flex,
  Group,
  SegmentedControl,
  Chip,
} from "@mantine/core";
import { valueToLabel } from "@/utils";
import { useUserSettings } from "./UserSettingsProvider";

export default function ColorSelect({
  ref,
  ...others
}: React.ComponentProps<"div">) {
  const { theme, updateSettings } = useUserSettings();
  const [selectedTarget, setSelectedTarget] = useState<ColorTarget>("primary");

  const activeColor =
    selectedTarget === "primary"
      ? (theme.primaryColor as ThemeColorValues)
      : (theme.other?.secondaryColor as ThemeColorValues);

  const handleSelect = (nextColor: ThemeColorValues) => {
    const themeUpdate = createTheme(
      selectedTarget === "primary"
        ? { primaryColor: nextColor }
        : { other: { secondaryColor: nextColor } },
    );

    updateSettings({ theme: themeUpdate });
  };

  return (
    <Flex ref={ref} {...others} direction="column" gap="sm">
      <SegmentedControl
        fullWidth
        value={selectedTarget}
        onChange={(value) => setSelectedTarget(value as ColorTarget)}
        data={[
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
        ]}
      />

      <Chip.Group
        multiple={false}
        value={activeColor}
        onChange={(color) => handleSelect(color as ThemeColorValues)}
      >
        <Group
          gap="xs"
          wrap="wrap"
          maw="320"
          align="flex-start"
          justify="center"
        >
          {themeColorValues.map((color) => (
            <Chip
              key={color}
              value={color}
              color={color}
              checked={activeColor === color}
              variant={activeColor === color ? "filled" : "outline"}
            >
              {valueToLabel(color)}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </Flex>
  );
}
