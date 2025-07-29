import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Email from "../Authentication/Email";
import Password from "../Authentication/Password";
import Username from "../Authentication/Username";
import OnboardingScreen from "../Onboarding/Onboarding";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const StackNavigator = () => {
  const InsideStackNavigator = () => {
    return (
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
  };

  const AuthStackNavigator = () => {
    return (
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
      </AuthStack.Navigator>
    );
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true); //change all this later to use Async storage
  const checkUser = async () => {
    const user = true;
    if (user) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

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
