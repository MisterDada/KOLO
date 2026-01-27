import React, { useEffect, useRef } from "react";
import { Animated, StatusBar, StyleSheet, View } from "react-native";
import ViewImage from "../../assets/images/Viewimage.svg";
import Grass from "../../assets/images/grass.svg";

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
            Save better with smart Vaults.
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
            Personalized saving vaults for your goals — rent, travel, gadgets,
            and more
            <Animated.Text
              style={{
                color: "#3673FF",
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
