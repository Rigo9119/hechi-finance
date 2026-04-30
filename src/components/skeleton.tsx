import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { theme } from "@/theme/tokens";

function Skeleton({ width, height, borderRadius = theme.radii.md }: {
  width: number | `${number}%`;
  height: number;
  borderRadius?: number;
}) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.3, { duration: 800, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View
      style={[{ width, height, borderRadius, backgroundColor: "rgba(255,255,255,0.08)" }, style]}
    />
  );
}

export function SmallCardSkeleton() {
  return (
    <View style={styles.smallCard}>
      <Skeleton width={52} height={52} borderRadius={theme.radii.md} />
      <View style={{ flex: 1, gap: 6 }}>
        <Skeleton width="55%" height={14} />
        <Skeleton width="35%" height={11} />
      </View>
      <Skeleton width={70} height={14} />
    </View>
  );
}

export function BalanceCardSkeleton() {
  return (
    <View style={styles.balanceCard}>
      <Skeleton width={80} height={11} />
      <Skeleton width="60%" height={36} borderRadius={theme.radii.sm} />
      <Skeleton width={70} height={22} borderRadius={theme.radii.full} />
    </View>
  );
}

const styles = StyleSheet.create({
  smallCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.dark.tertiary,
    borderRadius: theme.radii.lg,
    padding: theme.spacing.md,
  },
  balanceCard: {
    backgroundColor: theme.colors.dark.tertiary,
    borderRadius: theme.radii.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
});
