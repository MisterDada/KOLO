import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import EyeIcon from "../../assets/images/Eye.svg";
import SettingsIcon from "../../assets/images/Setting.svg";
import ProfileIcon from "../../assets/images/TabNavigator/Profile.svg";
import Vault from "../Components/Vault";
import { colors, sizes } from "../theme";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: sizes.spacing.sm }}>
          <View style={{ width: 35, height: 35 }}>
            <ProfileIcon width={35} height={35} />
          </View>
          <View>
            <Text style={{ color: colors.textMain, fontSize: sizes.fontSize.md, fontWeight: "500" }}>
              Welcome, 
            </Text>
            <Text
              style={{ color: colors.textMain, fontSize: sizes.fontSize.lg, fontWeight: "600" }}
            >Dada Obafemi</Text>
          </View>
        </View>
        <SettingsIcon />
      </View>

      <View style={{ marginBottom: sizes.spacing.sm }}>
        <View style={styles.accountInfo}>
          <View style={{ flexDirection: "row", gap: sizes.spacing.sm, paddingBottom: sizes.spacing.md }}>
            <View
              style={{
                padding: 11,
                backgroundColor: colors.inputBackground, // Map F3F3F3 to inputBackground
                borderRadius: sizes.radius.round,
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text>Hide balance</Text>
              <EyeIcon />
            </View>
          </View>
          <Text style={{ color: colors.primary, fontSize: sizes.fontSize.xxl, fontWeight: "500" }}>
            NGN655,000.00
          </Text>
          <View style={{ flexDirection: "row", gap: sizes.spacing.sm, paddingTop: 29 }}>
            <Pressable
              style={[
                styles.operations,
                {
                  borderColor: colors.primary,
                  borderWidth: 1,
                  backgroundColor: "#c8e4ff23", // Custom alpha, leaving as is for now
                },
              ]}
            >
              <Text style={[styles.operationsText, { color: colors.primary }]}>
                <Text style={styles.operationIcons}>+</Text> Add
              </Text>
            </Pressable>
            <Pressable style={styles.operations}>
              <Text style={styles.operationsText}>
                <Text style={styles.operationIcons}>↗</Text> Send
              </Text>
            </Pressable>
            <Pressable style={styles.operations}>
              <Text style={styles.operationsText}>
                <Text style={styles.operationIcons}>↙</Text> Withdraw
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Vault />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizes.paddingScreen,
    paddingTop: 50,
    paddingBottom: sizes.spacing.sm,
    backgroundColor: colors.surface,
  },
  accountInfo: {
    paddingHorizontal: sizes.paddingScreen,
    paddingVertical: 30,
    backgroundColor: colors.surface,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 5,
  },
  operations: {
    paddingVertical: sizes.spacing.sm,
    paddingHorizontal: sizes.spacing.md,
    backgroundColor: colors.inputBackground,
    borderRadius: sizes.radius.round,
    justifyContent: "center",
    alignItems: "center",
  },
  operationIcons: {
    fontSize: sizes.fontSize.lg,
    marginRight: sizes.spacing.sm,
  },
  operationsText: {
    fontSize: sizes.fontSize.sm,
    color: colors.textMain,
  },
});
