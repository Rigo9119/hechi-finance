import { ActivityIndicator, Pressable, StyleSheet, type PressableProps } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/themed-text";
import { theme } from "@/theme/tokens";

const GRADIENT_COLORS = [theme.colors.light.primary, theme.colors.dark.primary] as const;

type GradientButtonProps = Omit<PressableProps, "style"> & {
  label: string;
  loading?: boolean;
};

export function GradientButton({ label, loading, disabled, onPress, ...rest }: GradientButtonProps) {
  function handlePress(e: any) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress?.(e);
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      style={({ pressed }) => [styles.root, { opacity: pressed || loading ? 0.7 : 1 }]}
      {...rest}
    >
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[StyleSheet.absoluteFill, styles.gradient]}
      />
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <ThemedText type="bodyBold" style={styles.label}>
          {label}
        </ThemedText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: theme.radii.md,
    overflow: "hidden",
    paddingVertical: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.xs,
  },
  gradient: {
    opacity: 0.9,
  },
  label: {
    color: "#fff",
  },
});
