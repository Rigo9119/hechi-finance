import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

export interface ViewHeaderProps {
  title: string;
  amount: string;
  currency: string;
}

export default function ViewHeader({ title, amount, currency }: ViewHeaderProps) {
  const theme = useTheme();

  return (
    <View style={{ gap: theme.spacing.xs }}>
      <ThemedText
        type="caption"
        style={{
          color: theme.colors.white,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {title}.
      </ThemedText>

      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          gap: theme.spacing.md,
        }}
      >
        <ThemedText
          type="bodyBold"
          style={{
            color: theme.colors.primary,
          }}
        >
          {currency}
        </ThemedText>
        <ThemedText
          type="amount"
          style={{
            color: theme.colors.white,
            fontSize: 48,
            lineHeight: 56,
          }}
        >
          {amount}
        </ThemedText>
      </View>
    </View>
  );
}
