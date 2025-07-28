import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
