import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ViewImage from "../../assets/images/Viewimage.svg";

const Viewone = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.loader}>
        <Text>Hello</Text>
      </View>
      <View style={{ paddingHorizontal: 25 }}>
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
            }}
          >
            Personalized saving vaults for your goals — rent, travel, gadgets,
            and more+
          </Text>
        </View>
        <View>
          <ViewImage width={120} height={40} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Viewone;

const styles = StyleSheet.create({
  loader: {
    height: 30,
    backgroundColor: "blue",
    paddingHorizontal: 30,
  },
});
