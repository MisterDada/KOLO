import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Home from "../Main/Home";
import Profile from "../Main/Profile";

import CreateIcon from "../../assets/images/TabNavigator/Create.svg";
import FriendsIcon from "../../assets/images/TabNavigator/Friends.svg";
import HomeIcon from "../../assets/images/TabNavigator/Home.svg";
import ProfileIcon from "../../assets/images/TabNavigator/Profile.svg";
import SaveIcon from "../../assets/images/TabNavigator/Savings.svg";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();
  const bottomSafeAreaSpace = insets.bottom;
  const tabItemBottomPadding = bottomSafeAreaSpace;

  const { width } = Dimensions.get("window");

  const tabBarWidth = width - 100; // 75 left and 75 right padding
  const tabBarHeight = 67;
  const tabBarBottomMargin =
    tabItemBottomPadding > 0 ? tabItemBottomPadding : 21;
  const tabWidth = tabBarWidth / 5;

  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            position: "absolute",
            height: tabBarHeight - 12,
            width: tabWidth - 10,
            backgroundColor: "#3D9CFB1A",
            marginBottom: 6,
            marginLeft: 5,
            borderRadius: 40,
          },
          tabBarIndicatorContainerStyle: {
            height: tabBarHeight,
          },
          tabBarStyle: {
            width: tabBarWidth,
            height: tabBarHeight,
            marginLeft: 50,
            borderRadius: 40,
            position: "absolute",
            bottom: tabBarBottomMargin,
            shadowOffset: { width: 0, height: 4 },
            shadowColor: "gray",
            shadowOpacity: 0.4,
            shadowRadius: 4,
            alignItems: "center",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return <HomeIcon color={focused ? "#3D9CFB" : "#afafafff"} />;
            },
          }}
        />

        <Tab.Screen
          name="Save"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return <SaveIcon color={focused ? "#3D9CFB" : "#333333"} />;
            },
          }}
        />
        <Tab.Screen
          name="Create"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return <CreateIcon color={focused ? "#3D9CFB" : "#333333"} />;
            },
          }}
        />
        <Tab.Screen
          name="Friends"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return <FriendsIcon color={focused ? "#3D9CFB" : "#333333"} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return <ProfileIcon color={focused ? "#3D9CFB" : "#333333"} />;
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
  },
  tabBarItemText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
