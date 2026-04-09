import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {/* Tabs som main navigation */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Fallback hvis route ikke findes */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </GestureHandlerRootView>
  );
}
