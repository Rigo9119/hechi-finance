/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { theme } from "@/theme/tokens";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useTheme() {
  const scheme = useColorScheme();
  // TODO: esta vaina selecciona dark que es el default theme
  const colorSchema = scheme === "light" ? theme.colors.dark : theme.colors.light;

  return {
    radii: theme.radii,
    spacing: theme.spacing,
    typography: theme.typography,
    colors: colorSchema,
  };
}
