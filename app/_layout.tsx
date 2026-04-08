import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs som main navigation */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Fallback hvis route ikke findes */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
