"use client";

import {
  Chip,
  Flex,
  SegmentedControl,
  Group,
  mergeThemeOverrides,
  createTheme,
} from "@mantine/core";
import { useState } from "react";
import { themeColorValues, type ThemeColorValues } from "@/types/theme";
import { valueToLabel } from "@/utils";
import { useThemeContext } from "@/components/themeConfig/ProviderWrapper";

type ColorTarget = "primary" | "secondary";

export function ColorPicker() {
  const { theme, updateTheme } = useThemeContext();
  const [selectedTarget, setSelectedTarget] = useState<ColorTarget>("primary");

  const activeColor =
    selectedTarget === "primary"
      ? (theme.primaryColor as ThemeColorValues)
      : (theme.other?.secondaryColor as ThemeColorValues);

  const handleSelect = (nextColor: ThemeColorValues) => {
    const newTheme = createTheme(
      selectedTarget === "primary"
        ? { primaryColor: nextColor }
        : { other: { secondaryColor: nextColor } },
    );

    const nextTheme = mergeThemeOverrides(theme, newTheme);

    updateTheme(nextTheme);
  };

  return (
    <Flex direction="column" gap="sm">
      <SegmentedControl
        fullWidth
        value={selectedTarget}
        onChange={(value: ColorTarget) => setSelectedTarget(value)}
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
          {themeColorValues.map((color) => {
            return (
              <Chip
                key={color}
                value={color}
                color={color}
                checked={activeColor === color}
                variant={activeColor === color ? "filled" : "outline"}
              >
                {valueToLabel(color)}
              </Chip>
            );
          })}
        </Group>
      </Chip.Group>
    </Flex>
  );
}
