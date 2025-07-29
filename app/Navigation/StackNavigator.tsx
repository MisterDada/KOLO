import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Email from "../Authentication/Email";
import Password from "../Authentication/Password";
import Username from "../Authentication/Username";
import OnboardingScreen from "../Onboarding/Onboarding";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Password"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Username" component={Username} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
