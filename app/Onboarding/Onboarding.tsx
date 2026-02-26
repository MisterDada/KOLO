import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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
import { colors, sizes } from "../theme";
import Viewone from "./Viewone";
import Viewthree from "./Viewthree";
import Viewtwo from "./Viewtwo";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("screen");

const onboardingScreens = [
  (props: any) => <Viewone {...props} />,
  (props: any) => <Viewtwo {...props} />,
  (props: any) => <Viewthree {...props} />,
];

const OnboardingScreen = () => {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    timeout;
  }, []);

  const timeout = setTimeout(() => {
    if (currentIndex < onboardingScreens.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else if (currentIndex === onboardingScreens.length - 1) {
      flatListRef.current?.scrollToIndex({ index: 0 });
    } else {
      return;
    }
  }, 5000);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
    clearTimeout(timeout);
  };

  const move = () => {
    router.push("/(auth)/login");
  };

  const scrollToNext = () => {
    if (currentIndex < onboardingScreens.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push("/(auth)/register");
    }
  };

  const renderDots = () => {
    return onboardingScreens.map((_, index) => (
      <View
        key={index}
        style={{
          width: width * 0.25,
          height: height * 0.01,
          borderRadius: 3,
          backgroundColor:
            currentIndex === index ? colors.secondary : colors.primary,
        }}
      />
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.dotsContainer}>{renderDots()}</View>

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
          gap: sizes.spacing.sm,
          paddingHorizontal: sizes.paddingScreen,
          paddingBottom: 70,
        }}
      >
        <Pressable onPress={scrollToNext} style={styles.button}>
          <Text
            style={{
              color: colors.surface,
              fontSize: sizes.fontSize.md,
              fontWeight: "700",
            }}
          >
            {currentIndex === onboardingScreens.length - 1
              ? "Create your account"
              : "Next"}
          </Text>
        </Pressable>
        <Pressable onPress={move}>
          <Text
            style={{
              fontSize: sizes.fontSize.md,
              color: colors.secondary,
              fontWeight: "700",
              opacity: 0.8,
            }}
          >
            {currentIndex === onboardingScreens.length - 1 ? (
              ""
            ) : (
              <Text>I already have a Kolo account</Text>
            )}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.textMain,
    paddingVertical: sizes.spacing.md,
    paddingHorizontal: 30,
    borderRadius: sizes.radius.round,
    height: sizes.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  dotsContainer: {
    flexDirection: "row",
    gap: sizes.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: sizes.spacing.xl,
  },
});
