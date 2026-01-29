import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
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
        <View style={{ gap: 20 }}>
          <TextInput
            style={styles.textFields}
            placeholder="Enter your email"
            placeholderTextColor="#BDBDBD"
            value={email}
          />
          <TextInput
            style={styles.textFields}
            placeholder="Enter password"
            placeholderTextColor="#BDBDBD"
            value={email}
          />
        </View>
        <View>
          <Button title="sign-in"></Button>
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
