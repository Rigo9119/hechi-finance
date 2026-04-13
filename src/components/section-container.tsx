import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

export interface SectionContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionContainer({ title, subtitle, children }: SectionContainerProps) {
  const { colors, spacing } = useTheme();
  return (
    <View style={{ flexDirection: "column", justifyContent: "space-between", gap: spacing.md }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <ThemedText type="bodyMedium" style={{ color: colors.white }}>
          {title}
        </ThemedText>
        {subtitle && (
          <ThemedText type="body" style={{ color: colors.primary }}>
            {subtitle}
          </ThemedText>
        )}
      </View>
      <View style={{ flexDirection: "column", justifyContent: "space-between", gap: spacing.md }}>{children}</View>
    </View>
  );
}
