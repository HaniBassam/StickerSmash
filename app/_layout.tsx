import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          {/* Tabs som main navigation */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          {/* Fallback hvis route ikke findes */}
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
