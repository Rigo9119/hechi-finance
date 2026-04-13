import React, { type ReactNode } from "react";
import { View, StyleSheet } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { theme } from "@/theme/tokens";

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRow({ title = "Try editing", hint = "app/index.tsx" }: HintRowProps) {
  return (
    <View style={styles.stepRow}>
      <ThemedText type="caption">{title}</ThemedText>
      <ThemedView style={styles.codeSnippet}>
        <ThemedText>{hint}</ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeSnippet: {
    borderRadius: theme.spacing.xxs,
    paddingVertical: theme.spacing.xxs,
    paddingHorizontal: theme.spacing.xxs,
  },
});
