import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, sizes } from "../theme";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={styles.header}>
        <Text style={{ color: colors.textMain, fontSize: sizes.fontSize.xl, fontWeight: "600" }}>Profile</Text>
      </View>
      <View style={{ paddingHorizontal: sizes.paddingScreen }}>
        <TextInput
          placeholder="Enter display name"
          placeholderTextColor={colors.textMuted}
          style={styles.textInput}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.paddingScreen,
    paddingVertical: sizes.spacing.xl,
  },
  textInput: {
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
