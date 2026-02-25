import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashImage from "../assets/images/SplashScreen/SplashImage.svg";
import { colors } from "./theme";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.surface,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "600",
            fontSize: 60,
            color: colors.textMain,
          }}
        >
          Kolo <Text style={{ fontStyle: "italic", color: colors.secondary }}>+</Text>
        </Text>
      </View>
      <View style={{}}>
        <SplashImage />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
