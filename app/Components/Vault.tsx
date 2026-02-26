import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarIcon from "../../assets/images/VaultIcons/Calendar.svg";
import TargetIcon from "../../assets/images/VaultIcons/Target.svg";
import { colors, sizes } from "../theme";

const Vault = () => {
  const vaults = [
    {
      id: 1,
      name: "Vacation",
      description: "Trip to the Bahamas",
      amountSaved: "N5,000",
      target: "N100,000",
      date: "12 Nov, 2026",
      friends: ["John", "Jane"],
    },
    {
      id: 2,
      name: "Emergency Funds",
      description: "School Fees",
      amountSaved: "N10,000",
      target: "N230,000",
      date: "13 Dec, 2025",
    },
    {
      id: 3,
      name: "New Laptop",
      description: "Macbook Pro M4",
      amountSaved: "N850,000",
      target: "N1,500,000",
      date: "12 August, 2025",
      friends: ["John", "Jane", "Bob"],
    },
    {
      id: 4,
      name: "Birthday Gift",
      description: "Bag for debrah",
      amountSaved: "N150,000",
      target: "N450,000",
      date: "10 September, 2025",
    },
    {
      id: 5,
      name: "New Car",
      description: "BMW M4",
      amountSaved: "N650,000",
      target: "N45,000,000",
      date: "1 January, 2027",
    },
  ];

  return (
    <View style={styles.vault}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          marginTop: 40,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 500, color: colors.textMain }}>
          Your Vaults
        </Text>
        <Text style={{ fontSize: 16, color: colors.primary, fontWeight: 600 }}>
          See all
        </Text>
      </View>
      {vaults.length === 0 ? (
        <Text>No savings plan yet</Text>
      ) : (
        vaults.map((item) => (
          <View
            key={item.id}
            style={{
              flex: 1,
              marginBottom: 20,
              borderWidth: 0.5,
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: "white",
              borderColor: "#EDEDED",
            }}
          >
            <Text
              style={{
                color: colors.textMuted,
                fontSize: 16,
                marginBottom: 20,
              }}
            >
              {item.name.toUpperCase()}
            </Text>
            <Text style={{ marginBottom: 5, color: colors.textMain }}>
              {item.description}
            </Text>
            <Text style={{ color: "#333333", fontSize: 25, marginBottom: 10 }}>
              {item.amountSaved} Saved
            </Text>
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <TargetIcon />
                <Text style={{ color: "#333333", fontSize: 15 }}>
                  {item.target}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <CalendarIcon />
                <Text style={{ color: "#333333", fontSize: 15, opacity: 0.6 }}>
                  {item.date}
                </Text>
              </View>
            </View>
            <View>
              {item.friends?.length ? (
                <View style={styles.operationIcons}>
                  <Text style={{ color: colors.primary }}>
                    Friend accountability active({item.friends.length})
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default Vault;

const styles = StyleSheet.create({
  vault: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  operationIcons: {
    paddingVertical: sizes.spacing.sm - 3,
    paddingHorizontal: sizes.spacing.md,
    borderRadius: sizes.radius.round,
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: "#c8e4ff23",
    marginTop: 20,
    alignSelf: "flex-start",
  },
});
