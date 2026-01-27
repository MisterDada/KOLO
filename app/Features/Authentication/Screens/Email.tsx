import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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

type RootStackParamList = {
  Password: undefined;
};

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [borderColor, setBorderColor] = useState("white");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const checkEmail = () => {
    if (email == "") {
      setError(" Please enter your Email");
      setBorderColor("#F47575");
    } else if (!emailRegex.test(email)) {
      setError("Invalid Email");
      setBorderColor("#F47575");
    } else {
      setEmail("");
      setError("");
      setBorderColor("white");
      navigation.navigate("Password");
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
                }}
              >
                Let’s start with your email.
              </Text>
              <TextInput
                placeholder="Enter your preffered email"
                placeholderTextColor="#BDBDBD"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                style={{
                  borderWidth: 1,
                  borderColor: borderColor,
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
              <Text style={{ color: "#F47575" }}>{error}</Text>
            </View>
            <View style={{ alignItems: "flex-end", paddingBottom: 113 }}>
              <Pressable
                onPress={() => {
                  checkEmail();
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
});
