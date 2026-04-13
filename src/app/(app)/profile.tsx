import { ScrollView, StyleSheet, View } from "react-native";

import { MaxContentWidth, theme } from "@/theme/tokens";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { Icon } from "@/components/icon";
import ProfileRow from "@/components/profile-row";
import SectionContainer from "@/components/section-container";
import { useTheme } from "@/hooks/use-theme";
import { CONNECTED_ACCOUNTS_DEMO, PROFILE_SETTINGS_DEMO } from "@/data/demo-data/demo-data";

function ProfileHeader() {
  const theme = useTheme();

  return (
    <View style={{ alignItems: "center", gap: theme.spacing.sm, paddingVertical: theme.spacing.md }}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: theme.radii.full,
          backgroundColor: theme.colors.tertiary,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: theme.colors.primary,
        }}
      >
        <Icon name="user" size={36} color={theme.colors.primary} strokeWidth={1.5} />
      </View>
      <View style={{ alignItems: "center", gap: 2 }}>
        <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
          Rigo Rosero
        </ThemedText>
        <ThemedText type="caption" style={{ color: theme.colors.white, opacity: 0.5 }}>
          Cuenta personal
        </ThemedText>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <ThemedView style={styles.container}>
        <ProfileHeader />

        <SectionContainer title="Cuentas conectadas">
          {CONNECTED_ACCOUNTS_DEMO.map((row) => (
            <ProfileRow
              key={row.id}
              icon={row.icon}
              label={row.label}
              value={row.value}
              valueColor={theme.colors.primary}
            />
          ))}
        </SectionContainer>

        <SectionContainer title="Configuración">
          {PROFILE_SETTINGS_DEMO.map((row) => (
            <ProfileRow key={row.id} icon={row.icon} label={row.label} value={row.value} />
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
