import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

export interface BalanceCardProps {
  label: string;
  amount: string;
  currency: string;
  change: string;
}

export default function BalanceCard({ label, amount, currency, change }: BalanceCardProps) {
  const theme = useTheme();

  const isPositive = change.startsWith("+");

  return (
    <LinearGradient
      colors={["#1F2B1F", "#111411", "#0A0B0A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: theme.radii.lg,
        padding: theme.spacing.md,
        gap: theme.spacing.sm,
      }}
    >
      {/* Label */}
      <ThemedText
        type="caption"
        style={{
          color: theme.colors.white,
          opacity: 0.5,
          textTransform: "uppercase",
          letterSpacing: 1.5,
        }}
      >
        {label}
      </ThemedText>

      {/* Amount row */}
      <View style={{ flexDirection: "row", alignItems: "baseline", gap: theme.spacing.xs }}>
        <ThemedText
          type="heading"
          style={{ color: theme.colors.white, fontSize: 32, lineHeight: 40 }}
        >
          {amount}
        </ThemedText>
        <ThemedText
          type="bodyBold"
          style={{ color: theme.colors.white, opacity: 0.4 }}
        >
          {currency}
        </ThemedText>
      </View>

      {/* Change badge */}
      <View style={{ alignSelf: "flex-start" }}>
        <View
          style={{
            backgroundColor: isPositive ? "rgba(204, 255, 0, 0.12)" : "rgba(255, 155, 138, 0.12)",
            borderRadius: theme.radii.full,
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: theme.spacing.xxs,
          }}
        >
          <ThemedText
            type="caption"
            style={{
              color: isPositive ? theme.colors.primary : theme.colors.expense,
            }}
          >
            {change}
          </ThemedText>
        </View>
      </View>
    </LinearGradient>
  );
}
