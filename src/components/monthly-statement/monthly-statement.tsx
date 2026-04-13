import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import StatRow from "@/components/monthly-statement/stat-row";

export default function MonthlyStatement() {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.tertiary,
        borderRadius: theme.radii.lg,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.md,
        }}
      >
        <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
          Resumen mensual
        </ThemedText>
        <ThemedText type="caption" style={{ color: theme.colors.primary }}>
          Marzo 2026
        </ThemedText>
      </View>

      <View style={{ height: 1, backgroundColor: theme.colors.neutral, opacity: 0.15 }} />

      <View style={{ padding: theme.spacing.md, gap: theme.spacing.md }}>
        <StatRow label="Ingresos" amount="COP 12.450.000" progress={0.85} type="income" />
        <StatRow label="Gastos" amount="COP 8.150.000" progress={0.62} type="expense" />
      </View>

      <View style={{ height: 1, backgroundColor: theme.colors.neutral, opacity: 0.15 }} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.md,
        }}
      >
        <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.7 }}>
          Capacidad de ahorro este mes
        </ThemedText>
        <ThemedText type="bodyBold" style={{ color: theme.colors.primary }}>
          34.6%
        </ThemedText>
      </View>
    </View>
  );
}
