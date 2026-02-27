import { Stack } from "expo-router";

export default function CreateStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: false,
      }}
    />
  );
}
