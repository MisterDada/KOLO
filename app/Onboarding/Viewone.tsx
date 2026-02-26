import React, { useEffect, useRef } from "react";
import { Animated, StatusBar, StyleSheet, View } from "react-native";
import ViewImage from "../../assets/images/Viewimage.svg";
import Grass from "../../assets/images/grass.svg";
import { colors, sizes } from "../theme";

const Viewone = ({
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
        duration: 500,
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideAnim2, {
        duration: 700,
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideAnim3, {
        duration: 900,
        toValue: -20,
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
    <View>
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
            Save better with smart Vaults.
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
            Personalized saving vaults for your goals — rent, travel, gadgets,
            and more
            <Animated.Text
              style={{
                color: colors.secondary,
                fontStyle: "italic",
                transform: [{ translateY: slideAnim2 }],
              }}
            >
              +
            </Animated.Text>
          </Animated.Text>
        </View>
        <Animated.View
          style={{
            marginTop: 38,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ translateY: slideAnim3 }],
          }}
        >
          <ViewImage style={{ marginBottom: -35 }} />
          <Grass style={{ zIndex: 10 }} />
        </Animated.View>
      </View>
    </View>
  );
};

export default Viewone;

const styles = StyleSheet.create({
  loader: {
    height: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
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
