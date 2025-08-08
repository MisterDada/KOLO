import React, { useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
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
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (currentIndex === screenIndex) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    } else {
      // Reset animation when not visible
      fadeAnim.setValue(0);
      slideAnim.setValue(100);
    }
  }, [currentIndex, screenIndex, fadeAnim, slideAnim]);

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
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }}
          >
            Friends Keep You Accountable.
          </Animated.Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              maxWidth: "80%",
              opacity: 0.7,
            }}
          >
            Let trusted friends padlock your vaults to help you stay on track.
            It’s savings with support!
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View2 style={{ zIndex: 10, position: "absolute" }} />
          <View2card />
        </View>
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
