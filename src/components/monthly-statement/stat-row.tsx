import { useTheme } from "@/hooks/use-theme";
import { Icon } from "@/components/icon";
import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";

export type StatRowProps = {
  label: string;
  amount: string;
  progress: number; // 0 to 1
  type: "income" | "expense";
};

export default function StatRow({ label, amount, progress, type }: StatRowProps) {
  const theme = useTheme();
  const isIncome = type === "income";
  const iconColor = isIncome ? theme.colors.primary : theme.colors.expense;

  return (
    <View style={{ gap: theme.spacing.sm }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md }}>
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: theme.radii.md,
            backgroundColor: theme.colors.neutral,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name={isIncome ? "income" : "expense"} size={28} color={iconColor} strokeWidth={2.5} />
        </View>
        <View style={{ gap: 2 }}>
          <ThemedText
            type="caption"
            style={{
              color: theme.colors.white,
              opacity: 0.6,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {label}
          </ThemedText>
          <ThemedText type="amount" style={{ color: theme.colors.white }}>
            {amount}
          </ThemedText>
        </View>
      </View>

      {/* Progress bar - deberia usarse ?  */}
      <View
        style={{
          height: 6,
          borderRadius: theme.radii.full,
          backgroundColor: theme.colors.neutral,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            borderRadius: theme.radii.full,
            backgroundColor: iconColor,
          }}
        />
      </View>
    </View>
  );
}
