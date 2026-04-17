import { Pressable, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { ThemedView } from "@/components/themed-view";
import SmallCard from "@/components/cards/small-card";
import { ACCOUNTS_DEMO } from "@/data/demo-data/demo-data";

export default function AccountsScreen() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <ThemedView style={styles.container}>
        {ACCOUNTS_DEMO.map((account) => (
          <Pressable
            key={account.id}
            onPress={() => router.push(`/(app)/accounts/${account.id}`)}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          >
            <SmallCard {...account} />
          </Pressable>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.dark.black,
  },
  contentContainer: {
    flexDirection: "column",
    paddingTop: theme.spacing.md,
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    gap: theme.spacing.sm,
  },
});
