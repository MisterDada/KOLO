import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarIcon from "../../assets/images/VaultIcons/Calendar.svg";
import TargetIcon from "../../assets/images/VaultIcons/Target.svg";

const Vault = () => {
  const vaults = [
    {
      id: 1,
      name: "Vacation",
      description: "Trip to the Bahamas",
      amountSaved: "N5,000",
      target: "N100,000",
      date: "12 Nov, 2026",
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
          marginBottom: 30,
          marginTop: 20,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Your Vaults</Text>
        <Text style={{ fontSize: 14, color: "#3D9CFB", fontWeight: 600 }}>
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
                color: "#333333",
                opacity: 0.3,
                fontSize: 18,
                marginBottom: 20,
              }}
            >
              {item.name}
            </Text>
            <Text style={{ marginBottom: 5 }}>{item.description}</Text>
            <Text style={{ color: "#333333", fontSize: 20, marginBottom: 10 }}>
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
});
