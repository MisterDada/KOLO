import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Email from "../Features/Authentication/Screens/Email";
import Password from "../Features/Authentication/Screens/Password";
import Username from "../Features/Authentication/Screens/Username";
import OnboardingScreen from "../Onboarding/Onboarding";
import SplashScreen from "../SplashScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const StackNavigator = () => {
  const InsideStackNavigator = () => (
    <InsideStack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: false,
      }}
    >
      <InsideStack.Screen name="TabNavigator" component={TabNavigator} />
    </InsideStack.Navigator>
  );

  const AuthStackNavigator = () => (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: false,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Email" component={Email} />
      <AuthStack.Screen name="Password" component={Password} />
      <AuthStack.Screen name="Username" component={Username} />
      <AuthStack.Screen name="TabNavigator" component={TabNavigator} />
    </AuthStack.Navigator>
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false); //change all this later to use Async storage
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = false;
    if (user) {
      setIsLoggedIn(true);
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  // Render your navigation stack after splash
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Inside" component={InsideStackNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
