import React, { useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import View2card from "../../assets/images/View2card.svg";
import View2 from "../../assets/images/Viewtwo.svg";

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
        duration: 800,
        useNativeDriver: true,
      }).start();

      Animated.timing(slideAnim2, {
        toValue: 0,
        duration: 1300,
        useNativeDriver: true,
      }).start();

      Animated.timing(slideAnim3, {
        toValue: 0,
        duration: 1800,
        useNativeDriver: true,
      }).start();
    } else {
      // Right now, I commented the lines out so the animation only shows up the first time
      // Reset animation when not visible
      // slideAnim1.setValue(100);
      // slideAnim2.setValue(100);
      // slideAnim3.setValue(100);
    }
  }, [currentIndex, screenIndex, slideAnim1]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="default" />
      <View style={styles.loader}></View>
      <View
        style={{
          paddingHorizontal: 25,
          marginTop: 50,
        }}
      >
        <View>
          <Animated.Text
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#333333",
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
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              maxWidth: "80%",
              opacity: 0.7,
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
    </SafeAreaView>
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
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 100,
    height: 60,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
