import { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Tabs, useRouter, useSegments } from "expo-router";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

import { Icon, type IconName } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/context/auth-context";
import { BottomTabInset, theme as tokens } from "@/theme/tokens";

const GRADIENT_COLORS = [tokens.colors.light.primary, tokens.colors.dark.primary] as const;

const TAB_ROUTES = [
  { name: "index", route: "/(app)", icon: "home" },
  { name: "transactions", route: "/(app)/transactions", icon: "transactions" },
  { name: "debts", route: "/(app)/debts", icon: "debts" },
  { name: "savings", route: "/(app)/savings", icon: "savings" },
  { name: "profile", route: "/(app)/profile", icon: "profile" },
] as const;

const ICON_SIZE = 22;

function TabItem({ name, route, icon, focused }: {
  name: string;
  route: string;
  icon: IconName;
  focused: boolean;
}) {
  const router = useRouter();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(focused ? 1.2 : 1, { damping: 12, stiffness: 180 });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  function handlePress() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push(route as any);
  }

  return (
    <Pressable onPress={handlePress} style={styles.tabItem} hitSlop={8}>
      <Animated.View style={animatedStyle}>
        {focused ? (
          <MaskedView
            maskElement={<Icon name={icon} size={ICON_SIZE} color="#fff" strokeWidth={2} />}
          >
            <LinearGradient
              colors={GRADIENT_COLORS}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ width: ICON_SIZE, height: ICON_SIZE }}
            />
          </MaskedView>
        ) : (
          <Icon name={icon} size={ICON_SIZE} color="rgba(248,249,250,0.4)" strokeWidth={1.5} />
        )}
      </Animated.View>
    </Pressable>
  );
}

function FloatingTabBar() {
  const segments = useSegments();
  const { bottom } = useSafeAreaInsets();

  const currentSegment = segments[segments.length - 1];

  return (
    <View style={[styles.tabBarContainer, { bottom: Math.max(bottom, 8) }]}>
      <View style={styles.tabBarBackground}>
        <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill} />
        <View style={styles.tabBarOverlay} />
      </View>
      {TAB_ROUTES.map(({ name, route, icon }) => {
        const focused = currentSegment === name || (name === "index" && currentSegment === "(app)");
        return (
          <TabItem key={name} name={name} route={route} icon={icon} focused={focused} />
        );
      })}
    </View>
  );
}

function HeaderLeft() {
  const theme = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.xs, paddingLeft: theme.spacing.md }}>
      <View
        style={{
          width: 28,
          height: 28,
          borderRadius: theme.radii.sm,
          backgroundColor: theme.colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemedText type="caption" style={{ color: theme.colors.black, fontWeight: "700" }}>
          H
        </ThemedText>
      </View>
      <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
        hechi
      </ThemedText>
    </View>
  );
}

function HeaderRight() {
  const theme = useTheme();
  const { logout } = useAuth();

  return (
    <Pressable
      onPress={logout}
      style={({ pressed }) => ({
        paddingRight: theme.spacing.md,
        paddingLeft: theme.spacing.sm,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Icon name="logout" size={20} color={theme.colors.expense} strokeWidth={1.5} />
    </Pressable>
  );
}

export default function AppTabs() {
  const { colors } = useTheme();

  return (
    <Tabs
      tabBar={() => <FloatingTabBar />}
      screenOptions={{
        headerStyle: { backgroundColor: colors.black },
        headerShadowVisible: false,
        headerTitle: () => null,
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        contentStyle: { paddingBottom: BottomTabInset },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="transactions" />
      <Tabs.Screen name="debts" />
      <Tabs.Screen name="savings" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="accounts" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    left: 24,
    right: 24,
    height: 64,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },
  tabBarBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  tabBarOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(10,10,10,0.35)",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 64,
  },
});
