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

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View style={{ width: 35, height: 35 }}>
            <ProfileIcon width={35} height={35} />
          </View>
          <View>
            <Text style={{ color: "#333333", fontSize: 16, fontWeight: 500 }}>
              Welcome,
            </Text>
            <Text style={{ color: "#333333", fontSize: 18, fontWeight: 600 }}>
              Michael Okogwu
            </Text>
          </View>
        </View>
        <SettingsIcon />
      </View>

      <View style={{ marginBottom: 10 }}>
        <View style={styles.accountInfo}>
          <View style={{ flexDirection: "row", gap: 10, paddingBottom: 20 }}>
            <View
              style={{
                padding: 11,
                backgroundColor: "#F3F3F3",
                borderRadius: 100,
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text>Hide balance</Text>
              <EyeIcon />
            </View>
          </View>
          <Text style={{ color: "#3D9CFB", fontSize: 32, fontWeight: 600 }}>
            NGN655,000.00
          </Text>
          <View style={{ flexDirection: "row", gap: 10, paddingTop: 29 }}>
            <Pressable
              style={[
                styles.operations,
                {
                  borderColor: "#3D9CFB",
                  borderWidth: 1,
                  backgroundColor: "#3d9cfb23",
                },
              ]}
            >
              <Text style={[styles.operationsText, { color: "#3D9CFB" }]}>
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
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  accountInfo: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 5,
  },
  operations: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#F3F3F3",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  operationIcons: {
    fontSize: 18,
    marginRight: 10,
  },
  operationsText: {
    fontSize: 14,
  },
});
