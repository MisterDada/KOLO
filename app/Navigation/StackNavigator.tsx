import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Viewone from "../Onboarding/Viewone";
import View3 from "../Onboarding/Viewthree";
import View2 from "../Onboarding/Viewtwo";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="View3"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="View1" component={Viewone} />
      <Stack.Screen name="View2" component={View2} />
      <Stack.Screen name="View3" component={View3} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
