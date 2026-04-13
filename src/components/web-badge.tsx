import { version } from "expo/package.json";
import { Image } from "expo-image";
import React from "react";
import { useColorScheme, StyleSheet } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { theme } from "@/theme/tokens";

export function WebBadge() {
  const scheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="caption" style={styles.versionText}>
        v{version}
      </ThemedText>
      <Image
        source={
          scheme === "dark"
            ? require("@/assets/images/expo-badge-white.png")
            : require("@/assets/images/expo-badge.png")
        }
        style={styles.badgeImage}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xs,
    alignItems: "center",
    gap: theme.spacing.xxs,
  },
  versionText: {
    textAlign: "center",
  },
  badgeImage: {
    width: 123,
    aspectRatio: 123 / 24,
  },
});
