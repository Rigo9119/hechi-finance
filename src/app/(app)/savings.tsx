import { ScrollView, StyleSheet } from "react-native";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { ThemedView } from "@/components/themed-view";
import BalanceCard from "@/components/cards/balance-card";
import SavingsCard from "@/components/cards/savings-card";
import SectionContainer from "@/components/section-container";
import { SAVINGS_DEMO } from "@/data/demo-data/demo-data";

const totalValue = SAVINGS_DEMO.reduce((sum, s) => sum + s.value, 0);
const investments = SAVINGS_DEMO.filter((s) => s.returnPercent !== undefined);
const savingsAccounts = SAVINGS_DEMO.filter((s) => s.returnPercent === undefined);

export default function SavingsScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <ThemedView style={styles.container}>
        <BalanceCard
          label="Total ahorros e inversiones"
          amount={`$ ${totalValue.toLocaleString("es-CO")}`}
          currency="COP"
          change="+8.6% rendimiento promedio"
        />
        {investments.length > 0 && (
          <SectionContainer title="Inversiones">
            {investments.map((account) => (
              <SavingsCard key={account.id} {...account} />
            ))}
          </SectionContainer>
        )}
        {savingsAccounts.length > 0 && (
          <SectionContainer title="Cuentas de ahorro">
            {savingsAccounts.map((account) => (
              <SavingsCard key={account.id} {...account} />
            ))}
          </SectionContainer>
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
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    gap: theme.spacing.md,
  },
});
