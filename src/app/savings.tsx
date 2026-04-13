import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet } from "react-native";
import { MaxContentWidth, theme } from "@/theme/tokens";
import { useTheme } from "@/hooks/use-theme";

export default function SavingsScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.colors.tertiary }]}
      contentContainerStyle={[styles.contentContainer]}
    >
      <ThemedView style={styles.container}>
        <ThemedText> Savings view</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: theme.spacing.xxs,
    alignItems: "center",
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs,
  },
  centerText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: "row",
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xxs,
    borderRadius: theme.spacing.xs,
    justifyContent: "center",
    gap: theme.spacing.xxs,
    alignItems: "center",
  },
  sectionsWrapper: {
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.xs,
    paddingTop: theme.spacing.xxs,
  },
  collapsibleContent: {
    alignItems: "center",
  },
  imageTutorial: {
    width: "100%",
    aspectRatio: 296 / 171,
    borderRadius: theme.spacing.xs,
    marginTop: theme.spacing.xxs,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
