import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/themed-text";
import { ThemedInput } from "@/components/themed-input";
import { GradientButton } from "@/components/gradient-button";
import { useAuth } from "@/context/auth-context";
import { useTheme } from "@/hooks/use-theme";
import { theme } from "@/theme/tokens";

export default function LoginScreen() {
  const { login } = useAuth();
  const themeValues = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      setError("Ingresa tu correo y contraseña.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await login(email, password);
    } catch {
      setError("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Brand */}
      <View style={styles.brand}>
        <LinearGradient
          colors={["#1F2B1F", "#0A0B0A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logoBox}
        >
          <ThemedText
            type="heading"
            style={{ color: themeValues.colors.primary, letterSpacing: 2 }}
          >
            H
          </ThemedText>
        </LinearGradient>
        <ThemedText type="heading" style={{ color: themeValues.colors.white }}>
          hechi
        </ThemedText>
        <ThemedText
          type="caption"
          style={{ color: themeValues.colors.white, opacity: 0.4, marginTop: 4 }}
        >
          Tu finanzas, en un solo lugar.
        </ThemedText>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <ThemedInput
          label="Correo electrónico"
          placeholder="tu@correo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ThemedInput
          label="Contraseña"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error ? (
          <ThemedText
            type="caption"
            style={{ color: themeValues.colors.expense, textAlign: "center" }}
          >
            {error}
          </ThemedText>
        ) : null}

        <GradientButton
          label="Iniciar sesión"
          loading={loading}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark.black,
    justifyContent: "center",
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.xl,
  },
  brand: {
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: theme.radii.lg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.xs,
  },
  form: {
    gap: theme.spacing.md,
  },
});
