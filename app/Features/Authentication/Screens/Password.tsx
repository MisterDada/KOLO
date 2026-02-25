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

const Password = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [borderColor, setBorderColor] = useState(colors.inputBackground);
  const [error, setError] = useState("");

  const passwordRegex = /.{12,}$/; // Regex for a 12 character password

  const checkPassword = () => {
    if (!passwordRegex.test(password) || password === "") {
      setError(
        "! Password should not be empty and must be at least 12 characters long",
      );
      setBorderColor(colors.error);
    } else {
      setPassword("");
      setError("");
      setBorderColor(colors.inputBackground);
      router.push("/(auth)/username");
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
                    maxWidth: "80%",
                  }}
                >
                  Secure your Account
                </Text>
                <TextInput
                  placeholder="Enter a secure password"
                  placeholderTextColor={colors.textMuted}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={{
                    borderWidth: borderColor === colors.error ? 1 : 0,
                    borderRadius: sizes.radius.md,
                    borderColor: borderColor,
                    padding: 15,
                    fontSize: sizes.fontSize.md,
                    color: colors.textMain,
                    backgroundColor: colors.inputBackground,
                    paddingVertical: sizes.spacing.md,
                    paddingHorizontal: 23,
                    height: sizes.inputHeight,
                  }}
                />
                <Text style={{ color: colors.error }}>{error}</Text>
              </View>
              <View style={{ alignItems: "flex-end", paddingBottom: sizes.spacing.xl, marginTop: sizes.spacing.xl }}>
                <Pressable
                  onPress={() => {
                    checkPassword();
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

export default Password;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.paddingScreen,
    paddingTop: 50,
    justifyContent: "space-between",
    flex: 1,
  },
});
