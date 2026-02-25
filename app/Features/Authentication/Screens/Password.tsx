import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../../../assets/images/Back.svg";

const Password = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [borderColor, setBorderColor] = useState("white");
  const [error, setError] = useState("");

  const passwordRegex = /.{12,}$/; // Regex for a 12 character password

  const checkPassword = () => {
    if (!passwordRegex.test(password) || password === "") {
      setError(
        "! Password should not be empty and must be at least 12 characters long",
      );
      setBorderColor("#F47575");
    } else {
      setPassword("");
      setError("");
      setBorderColor("white");
      router.push("/(auth)/username");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View style={{ gap: 20 }}>
              <Back onPress={() => router.back()} />
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#333333",
                  lineHeight: 48,
                  letterSpacing: 0,
                  marginBottom: 43,
                  maxWidth: "80%",
                }}
              >
                Secure your Account
              </Text>
              <TextInput
                placeholder="Enter a secure password"
                placeholderTextColor="#BDBDBD"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: borderColor,
                  padding: 15,
                  fontSize: 16,
                  color: "#333333",
                  backgroundColor: "#F2F2F2",
                  paddingVertical: 20,
                  paddingHorizontal: 23,
                  height: 60,
                }}
              />
              <Text style={{ color: "#F47575" }}>{error}</Text>
            </View>
            <View style={{ alignItems: "flex-end", paddingBottom: 113 }}>
              <Pressable
                onPress={() => {
                  checkPassword();
                }}
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
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                >
                  Continue
                </Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: "space-between",
    flex: 1,
  },
});
