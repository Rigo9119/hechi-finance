import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { ThemedView } from "@/components/themed-view";
import BalanceCard from "@/components/cards/balance-card";
import SectionContainer from "@/components/section-container";
import SmallCard from "@/components/cards/small-card";
import { MonthSelector, type SelectedMonth } from "@/components/month-selector";
import { RECENT_TRANSACTIONS_DEMO } from "@/data/demo-data/demo-data";

const now = new Date();

export default function TransactionsScreen() {
  const [selectedMonth, setSelectedMonth] = useState<SelectedMonth>({
    month: now.getMonth(),
    year: now.getFullYear(),
  });

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <ThemedView style={styles.container}>
        <MonthSelector value={selectedMonth} onChange={setSelectedMonth} />
        <BalanceCard
          label="Balance mensual"
          amount="+$ 2.450.800"
          currency="COP"
          change="+12.4% vs Mes pasado"
        />
        <SectionContainer title="Movimientos recientes" subtitle="Ver historial">
          {RECENT_TRANSACTIONS_DEMO.map((transaction) => (
            <SmallCard
              key={transaction.id}
              title={transaction.title}
              subtitle={transaction.description}
              valueColor={transaction.valueColor}
              value={transaction.value}
            />
          ))}
        </SectionContainer>
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
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    gap: theme.spacing.md,
  },
});
