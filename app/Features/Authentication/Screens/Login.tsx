import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Back from "../../../../assets/images/Back.svg";
import { colors, sizes } from "../../../theme";
import { LoginRequest } from "../Models/LoginRequest";
import { login } from "../Services/loginService";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async () => {
    const request: LoginRequest = {
      email,
      password,
    };
    try {
      if (!email && !password) {
        setEmailError("Email is required");
        setPasswordError("Password is required");
      } else {
        setLoading(true);
        await login(request);
        // Authentication is handled by global state; layout will automatically redirect
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: colors.surface }}
    >
      <StatusBar barStyle="dark-content" />
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
              Login
            </Text>
            <View style={{ gap: 5 }}>
              <TextInput
                style={styles.textFields}
                placeholder="Enter your email"
                placeholderTextColor={colors.textMuted}
                value={email}
                onChangeText={setEmail}
              />
              <Text style={{ color: colors.error }}>{emailError}</Text>
              <TextInput
                style={styles.textFields}
                placeholder="Enter password"
                placeholderTextColor={colors.textMuted}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Text style={{ color: colors.error }}>{passwordError}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              paddingBottom: sizes.spacing.xl,
              marginTop: sizes.spacing.xl,
            }}
          >
            <Pressable
              onPress={registerUser}
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
              {loading ? (
                <ActivityIndicator color={colors.surface} />
              ) : (
                <Text
                  style={{
                    color: colors.surface,
                    fontSize: sizes.fontSize.md,
                    fontWeight: "700",
                  }}
                >
                  Continue
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    paddingTop: 100,
    paddingHorizontal: sizes.paddingScreen,
    justifyContent: "space-between",
  },
  textFields: {
    borderWidth: 0,
    borderRadius: sizes.radius.md,
    fontSize: sizes.fontSize.md,
    color: colors.textMain,
    backgroundColor: colors.inputBackground,
    paddingVertical: sizes.spacing.md,
    paddingHorizontal: 23,
    height: sizes.inputHeight,
  },
});
