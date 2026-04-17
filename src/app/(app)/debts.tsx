import { ScrollView, StyleSheet, View } from "react-native";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { ThemedView } from "@/components/themed-view";
import BalanceCard from "@/components/cards/balance-card";
import DebtCard from "@/components/cards/debt-card";
import SectionContainer from "@/components/section-container";
import { DEBTS_DEMO } from "@/data/demo-data/demo-data";

const totalUsed = DEBTS_DEMO.reduce((sum, d) => sum + d.used, 0);
const totalLimit = DEBTS_DEMO.reduce((sum, d) => sum + d.limit, 0);
const utilizationPercent = Math.round((totalUsed / totalLimit) * 100);

export default function DebtsScreen() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <ThemedView style={styles.container}>
        <BalanceCard
          label="Total adeudado"
          amount={`-$ ${totalUsed.toLocaleString("es-CO")}`}
          currency="COP"
          change={`${utilizationPercent}% del cupo total utilizado`}
        />
        <SectionContainer title="Tarjetas de crédito">
          {DEBTS_DEMO.map((debt) => (
            <DebtCard key={debt.id} {...debt} />
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
