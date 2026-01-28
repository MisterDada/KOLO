import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Viewone from "./Viewone";
import Viewthree from "./Viewthree";
import Viewtwo from "./Viewtwo";
const { width } = Dimensions.get("window");

const onboardingScreens = [
  (props: any) => <Viewone {...props} />,
  (props: any) => <Viewtwo {...props} />,
  (props: any) => <Viewthree {...props} />,
];

const OnboardingScreen = ({ navigation }: any) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const scrollToNext = () => {
    if (currentIndex < onboardingScreens.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("Email");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="default" />
      <FlatList
        data={onboardingScreens}
        renderItem={({ item, index }) => (
          <View style={{ width }}>
            {item({ currentIndex, screenIndex: index })}
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
      />

      <View
        style={{
          alignItems: "flex-end",
          gap: 10,
          paddingHorizontal: 20,
          paddingBottom: 70,
        }}
      >
        <Pressable onPress={scrollToNext} style={styles.button}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
            {currentIndex === onboardingScreens.length - 1
              ? "Create your account"
              : "Next"}
          </Text>
        </Pressable>
        <Text
          style={{
            fontSize: 16,
            color: "#3673FF",
            fontWeight: 700,
            opacity: 0.8,
          }}
        >
          {currentIndex === onboardingScreens.length - 1 ? (
            ""
          ) : (
            <Text
              onPress={() => {
                router.push("/Features/Authentication/Screens/Login");
              }}
            >
              I already have a Kolo account
            </Text>
          )}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
