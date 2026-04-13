import { useState } from "react";
import { TextInput, type TextInputProps, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

type ThemedInputProps = TextInputProps & {
  label?: string;
};

export function ThemedInput({ label, style, ...props }: ThemedInputProps) {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ gap: theme.spacing.xs }}>
      {label && (
        <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.6 }}>
          {label}
        </ThemedText>
      )}
      <TextInput
        style={[
          {
            backgroundColor: theme.colors.tertiary,
            borderRadius: theme.radii.md,
            paddingHorizontal: theme.spacing.md,
            paddingVertical: theme.spacing.sm + 4,
            color: theme.colors.white,
            fontFamily: "Manrope_400Regular",
            fontSize: 16,
            borderWidth: 1,
            borderColor: focused ? theme.colors.primary : "transparent",
          },
          style,
        ]}
        placeholderTextColor={`${theme.colors.white}40`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </View>
  );
}
