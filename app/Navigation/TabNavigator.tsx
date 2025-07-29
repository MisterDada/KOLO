{
  /* */
}

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

  const tabBarWidth = width - 48; // 24 left and 24 right padding
  const tabBarHeight = 67;
  const tabBarBottomMargin =
    tabItemBottomPadding > 0 ? tabItemBottomPadding : 21;
  const tabWidth = tabBarWidth / 4;

  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            position: "absolute",
            height: tabBarHeight - 12,
            width: tabWidth - 12,
            backgroundColor: "#3D9CFB1A",
            marginBottom: 6,
            marginLeft: 6,
            borderRadius: 40,
          },
          tabBarIndicatorContainerStyle: {
            height: tabBarHeight,
          },
          tabBarStyle: {
            width: tabBarWidth,
            height: tabBarHeight,
            marginLeft: 24,
            borderRadius: 40,
            position: "absolute",
            bottom: tabBarBottomMargin,
            shadowOffset: { width: 0, height: 4 },
            shadowColor: "gray",
            shadowOpacity: 0.4,
            shadowRadius: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <HomeIcon />;
            },
          }}
        />

        <Tab.Screen
          name="Save"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <SaveIcon />;
            },
          }}
        />
        <Tab.Screen
          name="Create"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <CreateIcon />;
            },
          }}
        />
        <Tab.Screen
          name="Friends"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <FriendsIcon />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <ProfileIcon />;
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
