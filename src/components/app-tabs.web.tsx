import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps, TabListProps } from "expo-router/ui";
import { SymbolView } from "expo-symbols";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

import { ExternalLink } from "./external-link";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { useTheme } from "@/hooks/use-theme";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: "100%" }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="transactions" href="/transactions" asChild>
            <TabButton>Transactions</TabButton>
          </TabTrigger>
          <TabTrigger name="debts" href="/debts" asChild>
            <TabButton>Deudas</TabButton>
          </TabTrigger>
          <TabTrigger name="savings" href="/savings" asChild>
            <TabButton>Ahorros</TabButton>
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <TabButton>Perfil</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView style={styles.tabButtonView}>
        <ThemedText type="caption">{children}</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const { colors } = useTheme();

  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView style={styles.innerContainer}>
        <ThemedText type="caption" style={styles.brandText}>
          Expo Starter
        </ThemedText>

        {props.children}

        <ExternalLink href="https://docs.expo.dev" asChild>
          <Pressable style={styles.externalPressable}>
            <ThemedText type="body">Docs</ThemedText>
            <SymbolView tintColor={colors.primary} name={{ ios: "arrow.up.right.square", web: "link" }} size={12} />
          </Pressable>
        </ExternalLink>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: "absolute",
    width: "100%",
    padding: theme.spacing.xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  innerContainer: {
    paddingVertical: theme.spacing.xxs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    gap: theme.spacing.xxs,
    maxWidth: MaxContentWidth,
  },
  brandText: {
    marginRight: "auto",
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: theme.spacing.xxs,
    paddingHorizontal: theme.spacing.xs,
    borderRadius: theme.spacing.xs,
  },
  externalPressable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.xxs,
    marginLeft: theme.spacing.xs,
  },
});
