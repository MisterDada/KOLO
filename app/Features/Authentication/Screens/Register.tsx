import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../../../assets/images/Back.svg";
import { colors, sizes } from "../../../theme";
import { RegisterRequest } from "../Models/RegisterRequest";
import { signup } from "../Services/registerService";

const Email = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [borderColor, setBorderColor] = useState(colors.inputBackground);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const registerUser = async () => {
    const request: RegisterRequest = {
      email,
      password,
    };

    try {
      const checkEmail = () => {
        if (email === "") {
          setEmailError("Please enter your Email");
          setBorderColor(colors.error);
          return false;
        } else if (!emailRegex.test(email)) {
          setEmailError("Invalid Email");
          setBorderColor(colors.error);
          return false;
        } else {
          setEmailError("");
          setBorderColor(colors.inputBackground);
          return true;
        }
      };

      const checkPassword = () => {
        if (password === "") {
          setPasswordError("password cannot be empty");
          setBorderColor(colors.error);
          return false;
        } else {
          setPasswordError("");
          setBorderColor(colors.inputBackground);
          return true;
        }
      };
      const checkPasswordMatch = () => {
        if (confirmPassword !== password) {
          setConfirmPasswordError("passwords do not match");
          setBorderColor(colors.error);
          return false;
        } else {
          setConfirmPasswordError("");
          setBorderColor(colors.inputBackground);
          return true;
        }
      };
      const emailValid = checkEmail();
      const passwordValid = checkPassword();
      const passwordMatchValid = checkPasswordMatch();

      if (emailValid && passwordValid && passwordMatchValid) {
        await signup(request);
        // Authentication is handled by global state; layout will automatically redirect to inside stack
      }
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
              <View style={{ gap: sizes.spacing.md }}>
                <Back onPress={() => router.back()} />
                <Text
                  style={{
                    fontSize: sizes.fontSize.hero,
                    fontWeight: "500",
                    color: colors.textMain,
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
                    placeholderTextColor={colors.textMuted}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    style={[styles.textFields, { borderColor: borderColor, borderWidth: borderColor === colors.error ? 1 : 0 }]}
                  />
                  <Text style={{ color: colors.error }}>{emailError}</Text>
                  <TextInput
                    placeholder="Enter a password"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="numeric"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={[styles.textFields, { borderColor: borderColor, borderWidth: borderColor === colors.error ? 1 : 0 }]}
                  />
                  <Text style={{ color: colors.error }}>{passwordError}</Text>
                  <TextInput
                    placeholder="Confirm password"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="numeric"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={[styles.textFields, { borderColor: borderColor, borderWidth: borderColor === colors.error ? 1 : 0 }]}
                  />
                  <Text style={{ color: colors.error }}>{confirmPasswordError}</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end", paddingBottom: sizes.spacing.xl, marginTop: sizes.spacing.xl }}>
                <Pressable
                  onPress={() => {
                    registerUser();
                  }}
                  style={{
                    backgroundColor: colors.textMain,
                    paddingVertical: sizes.spacing.md,
                    paddingHorizontal: 30,
                    borderRadius: sizes.radius.round,
                    height: sizes.buttonHeight,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: colors.surface, fontSize: sizes.fontSize.md, fontWeight: "700" }}
                  >
                    Continue
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.paddingScreen,
    paddingTop: 50,
    justifyContent: "space-between",
    flex: 1,
  },
  textFields: {
    borderRadius: sizes.radius.md,
    fontSize: sizes.fontSize.md,
    color: colors.textMain,
    backgroundColor: colors.inputBackground,
    paddingVertical: sizes.spacing.md,
    paddingHorizontal: 23,
    height: sizes.inputHeight,
  },
});
