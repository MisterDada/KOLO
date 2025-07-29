import React from "react";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import View2card from "../../assets/images/View2card.svg";
import View2 from "../../assets/images/Viewtwo.svg";

const Viewtwo = () => {
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
            Friends Keep You Accountable.
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
            Let trusted friends padlock your vaults to help you stay on track.
            It’s savings with support!
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View2 style={{ zIndex: 10, position: "absolute" }} />
          <View2card />
        </View>
        <View style={{ alignItems: "flex-end", marginTop: 40, gap: 20 }}>
          {/* This View should be moved to the onBoarding component later*/}

          <Pressable style={styles.button}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
              Next
            </Text>
          </Pressable>
          <Text style={{ fontSize: 16, color: "#3673FF", fontWeight: 700 }}>
            I already have a Kolo+ account
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Viewtwo;

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
