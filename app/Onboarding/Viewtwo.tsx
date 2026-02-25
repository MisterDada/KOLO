import React, { useEffect, useRef } from "react";
import { Animated, StatusBar, StyleSheet, View } from "react-native";
import View2card from "../../assets/images/View2card.svg";
import View2 from "../../assets/images/Viewtwo.svg";
import { colors, sizes } from "../theme";

const Viewtwo = ({
  currentIndex,
  screenIndex,
}: {
  currentIndex: number;
  screenIndex: number;
}) => {
  const slideAnim1 = useRef(new Animated.Value(0)).current;
  const slideAnim2 = useRef(new Animated.Value(0)).current;
  const slideAnim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (currentIndex === screenIndex) {
      Animated.timing(slideAnim1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();

      Animated.timing(slideAnim2, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start();

      Animated.timing(slideAnim3, {
        toValue: -20,
        duration: 900,
        useNativeDriver: true,
      }).start();
    } else {
      // Reset animation when not visible
      slideAnim1.setValue(100);
      slideAnim2.setValue(100);
      slideAnim3.setValue(100);
    }
  }, [currentIndex, screenIndex, slideAnim1, slideAnim2, slideAnim3]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.loader}></View>
      <View
        style={{
          paddingHorizontal: sizes.paddingScreen,
          marginTop: 50,
        }}
      >
        <View>
          <Animated.Text
            style={{
              fontSize: sizes.fontSize.hero,
              fontWeight: "500",
              color: colors.textMain,
              lineHeight: 48,
              letterSpacing: 0,
              maxWidth: "80%",
              transform: [{ translateY: slideAnim1 }],
            }}
          >
            Friends Keep You Accountable.
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: sizes.fontSize.md,
              marginTop: sizes.spacing.md,
              lineHeight: 24,
              maxWidth: "80%",
              opacity: 0.7,
              color: colors.textMain,
              transform: [{ translateY: slideAnim2 }],
            }}
          >
            Let trusted friends padlock your vaults to help you stay on track.
            It’s savings with support!
          </Animated.Text>
        </View>
        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            transform: [{ translateY: slideAnim3 }],
          }}
        >
          <View2 style={{ zIndex: 10, position: "absolute" }} />
          <View2card />
        </Animated.View>
      </View>
    </View>
  );
};

export default Viewtwo;

const styles = StyleSheet.create({
  loader: {
    height: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.textMain,
    paddingVertical: sizes.spacing.md,
    paddingHorizontal: 30,
    borderRadius: sizes.radius.round,
    height: sizes.buttonHeight,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
