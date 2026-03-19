import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet, Pressable } from "react-native";
import { colors, sizes } from "@/app/theme";

const dummyVaults = [
  { id: "1", title: "Emergency Fund", target: 500000, current: 150000 },
  { id: "2", title: "Vacation", target: 200000, current: 45000 },
  { id: "3", title: "New Car", target: 1500000, current: 500000 },
];

export default function SearchVaults() {
  const [search, setSearch] = useState("");

  const filteredVaults = dummyVaults.filter(vault => 
    vault.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={styles.header}>
        <Text style={styles.title}>Search Vaults</Text>
        <TextInput 
          placeholder="Search by vault name..."
          placeholderTextColor={colors.textMuted}
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>
      <FlatList
        data={filteredVaults}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ color: colors.textMain, fontWeight: '500' }}>NGN {item.current.toLocaleString()}</Text>
              <Text style={{ color: colors.textMuted }}>Target: NGN {item.target.toLocaleString()}</Text>
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
    marginBottom: sizes.spacing.md,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: sizes.radius.md,
    paddingHorizontal: 20,
    height: sizes.inputHeight,
    color: colors.textMain,
    fontSize: sizes.fontSize.md,
  },
  listContainer: {
    paddingHorizontal: sizes.paddingScreen,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: colors.inputBackground,
    padding: 20,
    borderRadius: sizes.radius.lg,
    marginBottom: sizes.spacing.sm,
  },
  cardTitle: {
    fontSize: sizes.fontSize.lg,
    fontWeight: "600",
    color: colors.primary,
  }
});
