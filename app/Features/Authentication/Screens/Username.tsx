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

const Username = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [borderColor, setBorderColor] = useState(colors.inputBackground);

  const checkUsername = () => {
    if (username === "") {
      setError("! Username cannot be empty");
      setBorderColor(colors.error);
    } else {
      setUsername("");
      setError("");
      setBorderColor(colors.inputBackground);
      router.replace("/(tabs)/" as any);
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
                  What should we call you?
                </Text>
                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor={colors.textMuted}
                  value={username}
                  onChangeText={setUsername}
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
                    checkUsername();
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

export default Username;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.paddingScreen,
    paddingTop: 50,
    justifyContent: "space-between",
    flex: 1,
  },
});
