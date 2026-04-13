import { Tabs } from "expo-router";

import { Icon } from "@/components/icon";
import { useTheme } from "@/hooks/use-theme";

export default function AppTabs() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.primary,
        headerShadowVisible: false,
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
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transacciones",
          tabBarIcon: ({ color, size }) => <Icon name="transactions" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="debts"
        options={{
          title: "Deudas",
          tabBarIcon: ({ color, size }) => <Icon name="debts" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="savings"
        options={{
          title: "Ahorros ",
          tabBarIcon: ({ color, size }) => <Icon name="savings" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil ",
          tabBarIcon: ({ color, size }) => <Icon name="profile" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
