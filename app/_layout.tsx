import { AuthProvider, useAuth } from "@/src/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import SplashScreen from "./SplashScreen";

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (user && inAuthGroup) {
      // User is signed in and trying to access auth screens, redirect to home
      router.replace("/(tabs)" as any);
    } else if (!user && !inAuthGroup) {
      // User is strictly not signed in and trying to access inside screens, redirect to auth
      router.replace("/(auth)/onboarding" as any);
    }
  }, [user, loading, segments]);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
