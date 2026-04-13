import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { Icon } from "@/components/icon";
import SmallCard from "@/components/cards/small-card";
import SectionContainer from "@/components/section-container";
import { useTheme } from "@/hooks/use-theme";
import { ACCOUNTS_DEMO, ACCOUNT_TRANSACTIONS_DEMO } from "@/data/demo-data/demo-data";

export default function AccountDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const navigation = useNavigation();

  const account = ACCOUNTS_DEMO.find((a) => a.id === id);
  const transactions = ACCOUNT_TRANSACTIONS_DEMO.filter((t) => t.accountId === id);

  useEffect(() => {
    if (account) {
      navigation.setOptions({ title: account.title });
    }
  }, [account]);

  if (!account) return null;

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <ThemedView style={styles.container}>

        {/* Account summary card */}
        <View
          style={{
            backgroundColor: theme.colors.tertiary,
            borderRadius: theme.radii.lg,
            padding: theme.spacing.md,
            alignItems: "center",
            gap: theme.spacing.md,
          }}
        >
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: theme.radii.lg,
              backgroundColor: theme.colors.neutral,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name={account.icon} size={28} color={theme.colors.secondary} strokeWidth={1.5} />
          </View>

          <View style={{ alignItems: "center", gap: 4 }}>
            <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
              {account.title}
            </ThemedText>
            <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
              {account.subtitle}{account.detail ? `  ${account.detail}` : ""}
            </ThemedText>
          </View>

          <ThemedText
            type="heading"
            style={{ color: account.valueColor ?? theme.colors.white }}
          >
            {account.value}
          </ThemedText>
        </View>

        {/* Transactions */}
        {transactions.length > 0 ? (
          <SectionContainer title="Movimientos recientes">
            {transactions.map((t) => (
              <SmallCard
                key={t.id}
                title={t.title}
                subtitle={t.description}
                value={t.value}
                valueColor={t.valueColor}
              />
            ))}
          </SectionContainer>
        ) : (
          <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.4, textAlign: "center" }}>
            Sin movimientos recientes
          </ThemedText>
        )}
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
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    gap: theme.spacing.md,
  },
});
