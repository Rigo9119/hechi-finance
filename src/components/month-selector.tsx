import { Pressable, View } from "react-native";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export type SelectedMonth = {
  month: number; // 0-indexed
  year: number;
};

type MonthSelectorProps = {
  value: SelectedMonth;
  onChange: (value: SelectedMonth) => void;
};

export function MonthSelector({ value, onChange }: MonthSelectorProps) {
  const theme = useTheme();

  const now = new Date();
  const isCurrentMonth = value.month === now.getMonth() && value.year === now.getFullYear();

  function goBack() {
    if (value.month === 0) {
      onChange({ month: 11, year: value.year - 1 });
    } else {
      onChange({ month: value.month - 1, year: value.year });
    }
  }

  function goForward() {
    if (isCurrentMonth) return;
    if (value.month === 11) {
      onChange({ month: 0, year: value.year + 1 });
    } else {
      onChange({ month: value.month + 1, year: value.year });
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.colors.tertiary,
        borderRadius: theme.radii.md,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.sm,
      }}
    >
      <Pressable
        onPress={goBack}
        style={({ pressed }) => ({ opacity: pressed ? 0.4 : 1, padding: theme.spacing.xs })}
      >
        <Icon name="chevronLeft" size={20} color={theme.colors.white} strokeWidth={2} />
      </Pressable>

      <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
        {MONTHS[value.month]} {value.year}
      </ThemedText>

      <Pressable
        onPress={goForward}
        style={({ pressed }) => ({
          opacity: isCurrentMonth ? 0.2 : pressed ? 0.4 : 1,
          padding: theme.spacing.xs,
        })}
      >
        <Icon name="chevronRight" size={20} color={theme.colors.white} strokeWidth={2} />
      </Pressable>
    </View>
  );
}
