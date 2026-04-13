import { View } from "react-native";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { type IconName } from "@/components/icon";

export interface ProfileRowProps {
  icon: IconName;
  label: string;
  value?: string;
  valueColor?: string;
}

export default function ProfileRow({ icon, label, value, valueColor }: ProfileRowProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: theme.radii.md,
          backgroundColor: theme.colors.neutral,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={18} color={theme.colors.secondary} strokeWidth={1.5} />
      </View>

      <ThemedText type="body" style={{ flex: 1, color: theme.colors.white }}>
        {label}
      </ThemedText>

      {value && (
        <ThemedText
          type="caption"
          style={{ color: valueColor ?? (theme.colors.white), opacity: valueColor ? 1 : 0.5 }}
        >
          {value}
        </ThemedText>
      )}

      <Icon name="chevronRight" size={16} color={theme.colors.white} strokeWidth={1.5} style={{ opacity: 0.3 }} />
    </View>
  );
}
