import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors, sizes } from "../theme";

const Create = () => {
  const [vaultName, setVaultName] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<string>("");
  const [targetDate, setTargetDate] = useState<string>("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create New Vault</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>
              Give your new vault a name and savings goal. Whether it’s a new
              phone, rent, or the next trip — this is where it starts.
            </Text>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.form}
        >
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Vault Name</Text>
            <TextInput
              placeholder="What are you saving for?"
              placeholderTextColor="#BDBDBD"
              value={vaultName}
              onChangeText={setVaultName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Goal Amount</Text>
            <TextInput
              placeholder="Enter Amount"
              placeholderTextColor="#BDBDBD"
              keyboardType="numeric"
              value={goalAmount}
              onChangeText={setGoalAmount}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Target Date</Text>
            <TextInput
              placeholder="DD/MM/YY"
              placeholderTextColor="#BDBDBD"
              value={targetDate}
              onChangeText={setTargetDate}
              style={styles.input}
            />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={styles.button}
              onPress={() => router.push("/(tabs)/Create/categories")}
            >
              <Text
                style={{
                  color: colors.surface,
                  fontSize: sizes.fontSize.md,
                  fontWeight: "700",
                }}
              >
                Continue
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 20,
    gap: 20,
    backgroundColor: "white",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "600",
  },
  subtitle: {
    color: "#333333",
    lineHeight: 24,
    opacity: 0.6,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
  },
  form: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingTop: 24,
    gap: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 12,
  },
  input: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 23,
    fontSize: 16,
    backgroundColor: "white",
    height: 60,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  button: {
    backgroundColor: colors.textMain,
    paddingVertical: sizes.spacing.md,
    paddingHorizontal: 30,
    borderRadius: sizes.radius.round,
    height: sizes.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
