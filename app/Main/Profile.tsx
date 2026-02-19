import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text>Profile</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter display name"
          style={styles.textInput}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  textInput: {
    borderWidth: 0,
    borderRadius: 20,
    fontSize: 16,
    color: "#333333",
    backgroundColor: "#F2F2F2",
    paddingVertical: 20,
    paddingHorizontal: 23,
    height: 60,
  },
});
