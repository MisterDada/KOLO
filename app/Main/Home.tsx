import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EyeIcon from "../../assets/images/Eye.svg";
import SettingsIcon from "../../assets/images/Setting.svg";
import ProfileIcon from "../../assets/images/TabNavigator/Profile.svg";
import Vault from "../Components/Vault";
import { colors, sizes } from "../theme";

const Home = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const [balance, setBalance] = useState("655,000.00");
  const [balanceToggle, setBalanceToggle] = useState("Hide Balance");

  const toggleBalance = () => {
    if (balance == "655,000.00" && balanceToggle == "Hide Balance") {
      setBalance("*******");
      setBalanceToggle("Show Balance");
    } else {
      setBalance("655,000.00");
      setBalanceToggle("Hide Balance");
    }
  };

  const username = "Mr. Dada";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: sizes.spacing.sm,
          }}
        >
          <Pressable onPress={() => router.push("/(tabs)/profile")}>
            <View style={{ width: width * 0.1, height: height * 0.1 }}>
              <ProfileIcon width={width * 0.1} height={height * 0.1} />
            </View>
          </Pressable>

          <View>
            <Text
              style={{
                color: colors.textMain,
                fontSize: sizes.fontSize.md,
                fontWeight: "500",
              }}
            >
              Welcome
            </Text>
            <Text
              style={{
                color: colors.textMain,
                fontSize: sizes.fontSize.xl,
                fontWeight: "500",
              }}
            >
              {username}
            </Text>
          </View>
        </View>
        <SettingsIcon />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: colors.background }}
      >
        <StatusBar barStyle={"dark-content"} />

        <View style={{ marginBottom: sizes.spacing.sm }}>
          <View style={styles.accountInfo}>
            <View
              style={{
                flexDirection: "row",
                gap: sizes.spacing.sm,
                paddingBottom: sizes.spacing.md,
              }}
            >
              <Pressable onPress={toggleBalance}>
                <View
                  style={{
                    padding: 6,
                    backgroundColor: colors.inputBackground, // Map F3F3F3 to inputBackground
                    borderRadius: sizes.radius.round,
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <Text>{balanceToggle}</Text>
                  <EyeIcon />
                </View>
              </Pressable>
            </View>
            <Text
              style={{
                color: colors.primary,
                fontSize: sizes.fontSize.xxl,
                fontWeight: "500",
              }}
            >
              NGN{balance}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: sizes.spacing.sm,
                paddingTop: 29,
              }}
            >
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
                <Text
                  style={[styles.operationsText, { color: colors.primary }]}
                >
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: sizes.paddingScreen,
              paddingVertical: 40,
              paddingBottom: 5,
              backgroundColor: colors.primary,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              marginTop: -30,
              zIndex: 2,
            }}
          >
            <Text style={{ color: colors.secondary, fontWeight: "600" }}>
              Money saved last month
            </Text>
            <Text
              style={{
                color: colors.textMain,
                fontSize: 18,
                opacity: 0.7,
                fontWeight: "600",
              }}
            >
              N144,000
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: sizes.paddingScreen,
              paddingVertical: 40,
              paddingBottom: 5,
              backgroundColor: "#3da93f5f",
              opacity: 0.7,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              marginTop: -30,
            }}
          >
            <Text style={{ color: "#0c580e5f", fontWeight: "600" }}>
              This month's goals
            </Text>
            <Text
              style={{
                color: colors.textMain,
                fontSize: 18,
                opacity: 0.7,
                fontWeight: "600",
              }}
            >
              N249,000
            </Text>
          </View>
        </View>
        <Vault />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizes.paddingScreen,
    paddingBottom: sizes.spacing.sm,
    backgroundColor: colors.surface,
  },
  accountInfo: {
    paddingHorizontal: sizes.paddingScreen,
    paddingVertical: 20,
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
    fontSize: sizes.fontSize.md,
    marginRight: sizes.spacing.sm,
  },
  operationsText: {
    fontSize: sizes.fontSize.lg,
    color: colors.textMain,
  },
});
