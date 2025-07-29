import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import ViewImage from "../../assets/images/Viewimage.svg";
import Grass from "../../assets/images/grass.svg";

const Viewone = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="default" />
      <View style={styles.loader}></View>
      <View
        style={{
          paddingHorizontal: 25,
          marginTop: 50,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#333333",
              lineHeight: 48,
              letterSpacing: 0,
              maxWidth: "80%",
            }}
          >
            Save better with smart Vaults.
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              maxWidth: "80%",
              opacity: 0.7,
            }}
          >
            Personalized saving vaults for your goals — rent, travel, gadgets,
            and more
            <Text style={{ color: "#3673FF", fontStyle: "italic" }}>+</Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 38,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ViewImage style={{ marginBottom: -35 }} />
          <Grass style={{ zIndex: 10 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Viewone;

const styles = StyleSheet.create({
  loader: {
    height: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 100,
    height: 60,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
