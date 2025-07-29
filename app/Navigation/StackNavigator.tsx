import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OnboardingScreen from "../Onboarding/Onboarding";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
