import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashImage from "../assets/images/SplashScreen/SplashImage.svg";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 60,
            color: "#333333",
            marginBottom: 70,
          }}
        >
          Kolo <Text style={{ fontStyle: "italic", color: "#3673FF" }}>+</Text>
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
