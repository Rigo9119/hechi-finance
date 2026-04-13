import { Pressable, View } from "react-native";
import { Tabs } from "expo-router";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/context/auth-context";

function HeaderLeft() {
  const theme = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.xs, paddingLeft: theme.spacing.md }}>
      <View
        style={{
          width: 28,
          height: 28,
          borderRadius: theme.radii.sm,
          backgroundColor: theme.colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemedText type="caption" style={{ color: theme.colors.black, fontWeight: "700" }}>
          H
        </ThemedText>
      </View>
      <ThemedText type="bodyBold" style={{ color: theme.colors.white }}>
        hechi
      </ThemedText>
    </View>
  );
}

function HeaderRight() {
  const theme = useTheme();
  const { logout } = useAuth();

  return (
    <Pressable
      onPress={logout}
      style={({ pressed }) => ({
        paddingRight: theme.spacing.md,
        paddingLeft: theme.spacing.sm,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Icon name="logout" size={20} color={theme.colors.expense} strokeWidth={1.5} />
    </Pressable>
  );
}

export default function AppTabs() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.black },
        headerShadowVisible: false,
        headerTitle: () => null,
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="transactions" color={color} size={size} />,
          tabBarLabel: "Transacciones",
        }}
      />
      <Tabs.Screen
        name="debts"
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="debts" color={color} size={size} />,
          tabBarLabel: "Deudas",
        }}
      />
      <Tabs.Screen
        name="savings"
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="savings" color={color} size={size} />,
          tabBarLabel: "Ahorros",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="profile" color={color} size={size} />,
          tabBarLabel: "Perfil",
        }}
      />
      {/* Hidden screens — accessible via router.push but not shown in tab bar */}
      <Tabs.Screen name="accounts" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}
