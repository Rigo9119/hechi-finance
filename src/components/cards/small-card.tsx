import { View } from "react-native";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { type IconName } from "@/components/icon";

export interface SmallCardProps {
  icon?: IconName;
  title: string;
  subtitle?: string | number;
  detail?: string;
  value: string;
  valueColor?: string;
}

export default function SmallCard({ icon, title, subtitle, detail, value, valueColor }: SmallCardProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        backgroundColor: theme.colors.tertiary,
        borderRadius: theme.radii.lg,
        padding: theme.spacing.md,
      }}
    >
      {icon && (
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
          <Icon name={icon} size={24} color={theme.colors.secondary} strokeWidth={1.5} />
        </View>
      )}

      <View style={{ flex: 1, gap: 2 }}>
        <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
          {title}
        </ThemedText>
        {subtitle && (
          <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
            {subtitle}
            {detail ? `  ${detail}` : ""}
          </ThemedText>
        )}
      </View>

      <ThemedText type="bodyBold" style={{ color: valueColor ?? theme.colors.primary }}>
        {value}
      </ThemedText>
    </View>
  );
}
