import { router } from "expo-router";
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
import { RegisterRequest } from "../Models/RegisterRequest";
import { signup } from "../Services/registerService";

const Email = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [borderColor, setBorderColor] = useState("white");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const registerUser = async () => {
    const request: RegisterRequest = {
      email,
      password,
    };

    try {
      await signup(request);
      router.push("/Navigation/TabNavigator");
    } catch (error) {
      console.error(error);
    }
  };

  const validateAll = async () => {
    try {
      const checkEmail = () => {
        if (email === "") {
          setEmailError("Please enter your Email");
          setBorderColor("#F47575");
          return false;
        } else if (!emailRegex.test(email)) {
          setEmailError("Invalid Email");
          setBorderColor("#F47575");
          return false;
        } else {
          setEmailError("");
          setBorderColor("white");
          return true;
        }
      };

      const checkPassword = () => {
        if (password === "") {
          setPasswordError("password cannot be empty");
          setBorderColor("#F47575");
          return false;
        } else {
          setPasswordError("");
          setBorderColor("white");
          return true;
        }
      };

      const checkPasswordMatch = () => {
        if (confirmPassword !== password) {
          setConfirmPasswordError("passwords do not match");
          setBorderColor("#F47575");
          return false;
        } else {
          setConfirmPasswordError("");
          setBorderColor("white");
          return true;
        }
      };

      // Call the validation functions
      const emailValid = checkEmail();
      const passwordValid = checkPassword();
      const passwordMatchValid = checkPasswordMatch();

      if (emailValid && passwordValid && passwordMatchValid) {
        registerUser();
      }
    } catch (error) {
      console.error("Validation error:", error);
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
                Create an account
              </Text>
              <View style={{ gap: 5 }}>
                <TextInput
                  placeholder="Enter your preferred email"
                  placeholderTextColor="#BDBDBD"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  style={[styles.textFields, { borderColor: borderColor }]}
                />
                <Text style={{ color: "#F47575" }}>{emailError}</Text>
                <TextInput
                  placeholder="Enter a password"
                  placeholderTextColor="#BDBDBD"
                  keyboardType="numeric"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={[styles.textFields, { borderColor: borderColor }]}
                />
                <Text style={{ color: "#F47575" }}>{passwordError}</Text>
                <TextInput
                  placeholder="Confirm password"
                  placeholderTextColor="#BDBDBD"
                  keyboardType="numeric"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={[styles.textFields, { borderColor: borderColor }]}
                />
                <Text style={{ color: "#F47575" }}>{confirmPasswordError}</Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end", paddingBottom: 113 }}>
              <Pressable
                onPress={() => {
                  registerUser();
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

export default Email;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: "space-between",
    flex: 1,
  },
  textFields: {
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    color: "#333333",
    backgroundColor: "#F2F2F2",
    paddingVertical: 20,
    paddingHorizontal: 23,
    height: 60,
  },
});
