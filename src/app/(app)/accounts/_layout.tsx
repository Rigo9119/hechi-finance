import { Pressable, View } from "react-native";
import { Stack, router } from "expo-router";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

function BackButton() {
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => router.back()}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1, paddingLeft: theme.spacing.sm })}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="chevronLeft" size={24} color={theme.colors.primary} strokeWidth={2} />
        <ThemedText type="body" style={{ color: theme.colors.primary }}>
          Volver
        </ThemedText>
      </View>
    </Pressable>
  );
}

export default function AccountsLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.black },
        headerTintColor: theme.colors.primary,
        headerShadowVisible: false,
        headerBackTitle: "Volver",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Mis Cuentas",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen name="[id]" options={{ title: "Detalle de cuenta" }} />
    </Stack>
  );
}
