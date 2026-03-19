import { colors, sizes } from "@/app/theme";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const categories = [
  { id: 1, name: "Vacation" },
  { id: 2, name: "Emergency" },
  { id: 3, name: "Utility / Bills" },
  { id: 4, name: "Shopping" },
  { id: 5, name: "Transportation" },
  { id: 6, name: "Health" },
  { id: 7, name: "Tax" },
  { id: 8, name: "Insurance" },
  { id: 9, name: "Education" },
  { id: 10, name: "Entertainment" },
  { id: 11, name: "Miscellaneous" },
];

const Category = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: sizes.paddingScreen,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          paddingTop: sizes.spacing.xl,
          paddingVertical: sizes.spacing.md,
        }}
      >
        <View
          style={{ alignItems: "center", paddingVertical: sizes.spacing.md }}
        >
          <Text style={{ fontSize: sizes.fontSize.xl }}>Create a Category</Text>
        </View>
        <Text
          style={{
            fontSize: sizes.fontSize.lg,
            color: colors.textMuted,
            fontWeight: "500",
          }}
        >
          Select a Category
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          paddingBottom: sizes.spacing.xxl,
        }}
      >
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={{
              padding: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              width: width * 0.4,
              height: height * 0.15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                padding: 10,
                color: "white",
                fontWeight: "500",
                fontSize: sizes.fontSize.md,
              }}
            >
              {category.name.toUpperCase()}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
