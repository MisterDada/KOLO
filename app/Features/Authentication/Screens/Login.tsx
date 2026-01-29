import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../../../assets/images/Back.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={{ gap: 20 }}>
          <Back onPress={router.back} />
          <Text
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#333333",
              lineHeight: 48,
              letterSpacing: 0,
              marginBottom: 43,
              maxWidth: "70%",
            }}
          >
            Login
          </Text>
          <View style={{ gap: 5 }}>
            <TextInput
              style={styles.textFields}
              placeholder="Enter your email"
              placeholderTextColor="#BDBDBD"
              value={email}
            />
            <Text style={{ color: "#F47575" }}>{emailError}</Text>
            <TextInput
              style={styles.textFields}
              placeholder="Enter password"
              placeholderTextColor="#BDBDBD"
              value={password}
            />
            <Text style={{ color: "#F47575" }}>{passwordError}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", paddingBottom: 113 }}>
          <Pressable
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  textFields: {
    borderWidth: 0,
    borderRadius: 20,
    fontSize: 16,
    color: "#333333",
    backgroundColor: "#F2F2F2",
    paddingVertical: 20,
    paddingHorizontal: 23,
    height: 60,
  },
});
