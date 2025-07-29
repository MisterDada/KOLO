import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Back from "../../assets/images/Back.svg";

const Email = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={{ gap: 20 }}>
          <Back />
          <Text
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#333333",
              lineHeight: 48,
              letterSpacing: 0,
              marginBottom: 43,
            }}
          >
            Let’s start with your email.
          </Text>
          <TextInput
            placeholder="Enter your preffered email"
            placeholderTextColor="#BDBDBD"
            style={{
              borderWidth: 0,
              borderRadius: 20,
              padding: 15,
              fontSize: 16,
              color: "#333333",
              backgroundColor: "#F2F2F2",
              paddingVertical: 20,
              paddingHorizontal: 23,
              height: 60,
            }}
          />
        </View>
        <View style={{ alignItems: "flex-end", paddingBottom: 113 }}>
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: "#333333",
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderRadius: 100,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: "space-between",
    flex: 1,
  },
});
