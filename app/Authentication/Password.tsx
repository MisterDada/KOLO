import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Back from "../../assets/images/Back.svg";

type RootStackParamList = {
  // Define the navigation type for the Password screen
  Username: undefined;
};

const Password = () => {
  const [password, setPassword] = useState("");
  const [borderColor, setBorderColor] = useState("white");
  const [error, setError] = useState("");

  const passwordRegex = /.{12,}$/; // Regex for a 12 character password

  const checkPassword = () => {
    if (!passwordRegex.test(password) || password === "") {
      setError("! Invalid Password");
      setBorderColor("#F47575");
    } else {
      setPassword("");
      setError("");
      setBorderColor("white");
      navigation.navigate("Username");
    }
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View style={{ gap: 20 }}>
              <Back onPress={navigation.goBack} />
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
