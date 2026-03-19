import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { colors, sizes } from "@/app/theme";

const dummyFriends = [
  { id: "1", name: "Alice Johnson", goal: "Vacation", avatarText: "AJ" },
  { id: "2", name: "David Smith", goal: "Emergency Fund", avatarText: "DS" },
  { id: "3", name: "Sarah Cole", goal: "New Car", avatarText: "SC" },
];

export default function Friends() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={styles.header}>
        <Text style={styles.title}>Accountable Friends</Text>
        <Text style={styles.subtitle}>People holding you accountable to your goals.</Text>
      </View>
      <FlatList
        data={dummyFriends}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.avatarText}</Text>
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.goal}>Vault: {item.goal}</Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.paddingScreen,
    paddingTop: sizes.spacing.xl,
    paddingBottom: sizes.spacing.md,
  },
  title: {
    fontSize: sizes.fontSize.xl,
    fontWeight: "600",
    color: colors.textMain,
  },
  subtitle: {
    fontSize: sizes.fontSize.sm,
    color: colors.textMuted,
    marginTop: 5,
  },
  listContainer: {
    paddingHorizontal: sizes.paddingScreen,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputBackground,
    padding: 15,
    borderRadius: sizes.radius.lg,
    marginBottom: sizes.spacing.sm,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: sizes.fontSize.md,
  },
  name: {
    fontSize: sizes.fontSize.md,
    fontWeight: "600",
    color: colors.textMain,
  },
  goal: {
    fontSize: sizes.fontSize.sm,
    color: colors.textMuted,
    marginTop: 2,
  }
});
