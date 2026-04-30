import { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";

import { theme } from "@/theme/tokens";
import ViewHeader from "@/components/view-header";
import { COP_CURRENCY } from "@/constants/utils";
import MonthlyStatement from "@/components/monthly-statement/monthly-statement";
import SectionContainer from "@/components/section-container";
import SmallCard from "@/components/cards/small-card";
import { SmallCardSkeleton } from "@/components/skeleton";
import { type IconName } from "@/components/icon";
import { ACCOUNTS_DEMO, GENERAL_REPORT_DEMO } from "@/data/demo-data/demo-data";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ViewHeader title="Patrimonio total" amount="184.000.000" currency={COP_CURRENCY} />
      <MonthlyStatement />

      <SectionContainer
        title="Mis Cuentas"
        subtitle="Ver todas"
        onSubtitlePress={() => router.push("/(app)/accounts")}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SmallCardSkeleton key={i} />)
          : ACCOUNTS_DEMO.map((account) => <SmallCard key={account.id} {...account} />)}
      </SectionContainer>

      <SectionContainer title="Reporte general">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SmallCardSkeleton key={i} />)
          : GENERAL_REPORT_DEMO.map((item) => (
              <SmallCard key={item.id} icon={item.icon} title={item.title} value={String(item.value)} />
            ))}
      </SectionContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.md,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.dark.black,
    paddingVertical: 4,
    paddingHorizontal: theme.spacing.md,
  },
});
