import { Platform } from "react-native";

const fontFamily = {
  regular: "Manrope_400Regular",
  medium: "Manrope_500Medium",
  semibold: "Manrope_600SemiBold",
  bold: "Manrope_700Bold",
} as const;

export const theme = {
  colors: {
    light: {
      primary: "#004A77",
      secondary: "#008081",
      tertiary: "#FFB800",
      expense: "#E05A4E",
      neutral: "#F8F9FA",
      white: "#F8F9FA",
      black: "#000000",
    },
    dark: {
      primary: "#CCFF00",
      secondary: "#00F0FF",
      tertiary: "#1A1C1E",
      expense: "#FF9B8A",
      neutral: "#050505",
      white: "#F8F9FA",
      black: "#000000",
    },
  },
  spacing: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 48,
    xxl: 64,
  },
  radii: { sm: 4, md: 8, lg: 16, full: 9999 },
  typography: {
    caption: {
      fontFamily: fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
    },
    body: {
      fontFamily: fontFamily.regular,
      fontSize: 16,
      lineHeight: 24,
    },
    bodyMedium: {
      fontFamily: fontFamily.medium,
      fontSize: 16,
      lineHeight: 24,
    },
    bodyBold: {
      fontFamily: fontFamily.bold,
      fontSize: 16,
      lineHeight: 24,
    },
    heading: {
      fontFamily: fontFamily.bold,
      fontSize: 24,
      lineHeight: 32,
    },
    title: {
      fontFamily: fontFamily.bold,
      fontSize: 32,
      lineHeight: 40,
    },
    amount: {
      fontFamily: fontFamily.bold,
      fontSize: 28,
      lineHeight: 36,
      fontVariant: ["tabular-nums" as const],
    },
  },
} as const;

export const MaxContentWidth = 800;
export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export type Theme = typeof theme;
