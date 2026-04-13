import { Text, type TextProps, type FontVariant } from "react-native";

import { useTheme } from "@/hooks/use-theme";

export type ThemedTextType = "caption" | "body" | "bodyMedium" | "bodyBold" | "heading" | "title" | "amount";

export type ThemedTextProps = TextProps & {
  type?: ThemedTextType;
};

export function ThemedText({ style, type = "body", ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        type === "body" && theme.typography.body,
        type === "title" && theme.typography.title,
        type === "caption" && theme.typography.caption,
        type === "bodyMedium" && theme.typography.bodyMedium,
        type === "bodyBold" && theme.typography.bodyBold,
        type === "heading" && theme.typography.heading,
        type === "amount" && {
          ...theme.typography.amount,
          fontVariant: theme.typography.amount.fontVariant as unknown as FontVariant[],
        },
        style,
      ]}
      {...rest}
    />
  );
}
