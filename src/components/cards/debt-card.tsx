import { View } from "react-native";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

export interface DebtCardProps {
  bank: string;
  cardType: string;
  lastFour: string;
  used: number;
  limit: number;
  nextPaymentDate: string;
  minimumPayment: number;
}

function formatCOP(value: number): string {
  return `COP ${value.toLocaleString("es-CO")}`;
}

export default function DebtCard({
  bank,
  cardType,
  lastFour,
  used,
  limit,
  nextPaymentDate,
  minimumPayment,
}: DebtCardProps) {
  const theme = useTheme();
  const utilization = used / limit;
  const available = limit - used;
  const utilizationColor = utilization > 0.7 ? theme.colors.expense : theme.colors.primary;

  return (
    <View
      style={{
        backgroundColor: theme.colors.tertiary,
        borderRadius: theme.radii.lg,
        padding: theme.spacing.md,
        gap: theme.spacing.md,
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: theme.radii.md,
            backgroundColor: theme.colors.neutral,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="credit" size={22} color={theme.colors.secondary} strokeWidth={1.5} />
        </View>
        <View style={{ flex: 1 }}>
          <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
            {bank}
          </ThemedText>
          <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
            {cardType} •••• {lastFour}
          </ThemedText>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <ThemedText type="bodyBold" style={{ color: utilizationColor }}>
            {formatCOP(used)}
          </ThemedText>
          <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
            de {formatCOP(limit)}
          </ThemedText>
        </View>
      </View>

      {/* Utilization bar */}
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
            width: `${utilization * 100}%`,
            height: "100%",
            borderRadius: theme.radii.full,
            backgroundColor: utilizationColor,
          }}
        />
      </View>

      {/* Footer */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
            Disponible
          </ThemedText>
          <ThemedText type="caption" style={{ color: theme.colors.primary }}>
            {formatCOP(available)}
          </ThemedText>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
            Próximo pago · {nextPaymentDate}
          </ThemedText>
          <ThemedText type="caption" style={{ color: theme.colors.white }}>
            Mín. {formatCOP(minimumPayment)}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}
