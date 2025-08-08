import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Create = () => {
  const [vaultName, setVaultName] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<string>("");

  return (
    <View style={{ flex: 1, backgroundColor: "#D9D9D9" }}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "#333333", fontWeight: 600 }}>
            Create New Vault
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#333333",
              lineHeight: 24,
              opacity: 0.6,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
            }}
          >
            Give your new vault a name and savings goal. Whether it’s a new
            phone, rent, or the next trip — this is where it starts.
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#333333",
                lineHeight: 24,
                letterSpacing: 0,
                marginBottom: 12,
              }}
            >
              Vault Name
            </Text>
            <TextInput
              placeholder="What are you saving for?"
              placeholderTextColor="#BDBDBD"
              value={vaultName}
              onChangeText={setVaultName}
              style={{
                borderRadius: 10,
                //   borderColor: borderColor,
                padding: 15,
                fontSize: 16,
                color: "#333333",
                backgroundColor: "#F2F2F2",
                paddingVertical: 20,
                paddingHorizontal: 23,
                height: 60,
              }}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#333333",
                lineHeight: 24,
                letterSpacing: 0,
                marginBottom: 12,
              }}
            >
              Goal Amount
            </Text>
            <TextInput
              placeholder="Enter Amount"
              placeholderTextColor="#BDBDBD"
              keyboardType="numeric"
              value={goalAmount}
              onChangeText={setGoalAmount}
              style={{
                borderRadius: 10,
                //   borderColor: borderColor,
                padding: 15,
                fontSize: 16,
                color: "#333333",
                backgroundColor: "#F2F2F2",
                paddingVertical: 20,
                paddingHorizontal: 23,
                height: 60,
              }}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#333333",
                lineHeight: 24,
                letterSpacing: 0,
                marginBottom: 12,
              }}
            >
              Target Date
            </Text>
            <TextInput
              placeholder="DD/MM/YY"
              placeholderTextColor="#BDBDBD"
              value={vaultName}
              onChangeText={setVaultName}
              style={{
                borderRadius: 10,
                //   borderColor: borderColor,
                padding: 15,
                fontSize: 16,
                color: "#333333",
                backgroundColor: "#F2F2F2",
                paddingVertical: 20,
                paddingHorizontal: 23,
                height: 60,
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 20,
    gap: 20,
    backgroundColor: "white",
  },
  form: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 25,
    paddingTop: 24,
    gap: 24,
  },
});
