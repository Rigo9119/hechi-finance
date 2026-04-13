import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet } from "react-native";
import { MaxContentWidth, theme } from "@/theme/tokens";
import { useTheme } from "@/hooks/use-theme";
import BalanceCard from "@/components/cards/balance-card";
import SectionContainer from "@/components/section-container";
import { RECENT_TRANSACTIONS_DEMO } from "@/data/demo-data/demo-data";
import SmallCard from "@/components/cards/small-card";

export default function TransactionsScreen() {
  const theme = useTheme();

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.contentContainer]}>
      <ThemedView style={styles.container}>
        <BalanceCard label="Balance mensual" amount="+$ 2.450.800" currency="COP" change="+12.4% vs Mes pasado" />
        <SectionContainer title="Movimientos recients" subtitle="Ver historial">
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
    gap: 4,
  },
});
