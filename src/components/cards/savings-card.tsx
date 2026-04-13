import { View } from "react-native";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { type IconName } from "@/components/icon";

export interface SavingsCardProps {
  icon: IconName;
  name: string;
  type: string;
  value: number;
  returnPercent?: number;
}

function formatCOP(value: number): string {
  return `COP ${value.toLocaleString("es-CO")}`;
}

export default function SavingsCard({ icon, name, type, value, returnPercent }: SavingsCardProps) {
  const theme = useTheme();
  const hasReturn = returnPercent !== undefined;
  const isPositive = hasReturn && returnPercent >= 0;

  return (
    <View
      style={{
        backgroundColor: theme.colors.tertiary,
        borderRadius: theme.radii.lg,
        padding: theme.spacing.md,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.md,
      }}
    >
      {/* Icon */}
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: theme.radii.md,
          backgroundColor: theme.colors.neutral,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={22} color={theme.colors.secondary} strokeWidth={1.5} />
      </View>

      {/* Name + type */}
      <View style={{ flex: 1 }}>
        <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
          {name}
        </ThemedText>
        <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
          {type}
        </ThemedText>
      </View>

      {/* Value + return */}
      <View style={{ alignItems: "flex-end", gap: 2 }}>
        <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
          {formatCOP(value)}
        </ThemedText>
        {hasReturn && (
          <ThemedText
            type="caption"
            style={{ color: isPositive ? theme.colors.primary : theme.colors.expense }}
          >
            {isPositive ? "+" : ""}
            {returnPercent}%
          </ThemedText>
        )}
      </View>
    </View>
  );
}
