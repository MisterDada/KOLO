import { Stack } from "expo-router";

export default function CreateStackLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom",
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="create" />
      <Stack.Screen name="categories" />
    </Stack>
  );
}
