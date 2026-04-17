# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (choose platform interactively)
bun run start

# Platform-specific
bun run ios
bun run android
bun run web

# Lint
bun run lint
```

> The project uses `bun` as the package manager (see `bun.lock`).

## Architecture

**Hechi Finance** is a React Native personal finance app built with Expo (SDK 55) and `expo-router` for file-based routing. The app targets iOS, Android, and Web.

### Route Groups

```
src/app/
  _layout.tsx          — Root layout: wraps everything in AuthProvider + AuthGate
  (auth)/login.tsx     — Unauthenticated flow
  (app)/               — Protected flow (all tabs)
    index.tsx          — Home / patrimony dashboard
    transactions.tsx
    debts.tsx
    savings.tsx
    profile.tsx
    accounts/          — Account detail sub-stack (hidden from tab bar)
```

`AuthGate` in `src/app/_layout.tsx` handles route protection: it redirects to `/(auth)/login` when not authenticated and to `/(app)` when authenticated, using `useSegments` + `useRouter`.

### Auth

`src/context/auth-context.tsx` holds a simple in-memory auth state. The `login()` function currently sets `isAuthenticated = true` directly — the Go backend integration is a TODO.

### Theming

- Design tokens live in `src/theme/tokens.ts`: colors (light/dark), spacing, radii, typography (all Manrope font variants).
- `useTheme()` hook (`src/hooks/use-theme.ts`) returns the active token set. **Note:** the hook currently inverts the color scheme — `"light"` system preference maps to `dark` tokens. This is intentional for now (dark-first design).
- Themed primitives: `ThemedText` (with `type` prop matching typography tokens), `ThemedView`.
- `MaxContentWidth = 800` and `BottomTabInset` are exported from tokens for layout constraints.

### Icons

`src/components/icon.tsx` wraps `lucide-react-native`. All icons are referenced by a string key (`IconName`). To add a new icon: import from `lucide-react-native` and add it to the `icons` map.

### Data

All data is currently demo/static, defined in `src/data/demo-data/demo-data.ts`. Types for each domain (accounts, debts, savings, transactions, profile settings) are defined and exported from that file.

### Path Aliases

`@/*` maps to `src/*` and `@/assets/*` maps to `assets/*` (configured in `tsconfig.json`).

### Platform-specific files

Some components have platform overrides using Expo's convention:
- `app-tabs.tsx` / `app-tabs.web.tsx`
- `animated-icon.tsx` / `animated-icon.web.tsx`
- `use-color-scheme.ts` / `use-color-scheme.web.ts`

### Key dependencies

| Package | Purpose |
|---|---|
| `expo-router` | File-based navigation |
| `react-native-reanimated` + `react-native-gesture-handler` | Animations & gestures |
| `react-native-gifted-charts` | Charts |
| `lucide-react-native` | Icons |
| `expo-linear-gradient` / `expo-glass-effect` | Visual effects |
| `@expo-google-fonts/manrope` | Typography |
