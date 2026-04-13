import { Pressable, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

export interface SectionContainerProps {
  title: string;
  subtitle?: string;
  onSubtitlePress?: () => void;
  children?: React.ReactNode;
}

export default function SectionContainer({ title, subtitle, onSubtitlePress, children }: SectionContainerProps) {
  const { colors, spacing } = useTheme();
  return (
    <View style={{ flexDirection: "column", justifyContent: "space-between", gap: spacing.md }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <ThemedText type="bodyMedium" style={{ color: colors.white }}>
          {title}
        </ThemedText>
        {subtitle && (
          <Pressable
            onPress={onSubtitlePress}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
          >
            <ThemedText type="body" style={{ color: colors.primary }}>
              {subtitle}
            </ThemedText>
          </Pressable>
        )}
      </View>
      {children && (
        <View style={{ flexDirection: "column", justifyContent: "space-between", gap: spacing.md }}>
          {children}
        </View>
      )}
    </View>
  );
}
