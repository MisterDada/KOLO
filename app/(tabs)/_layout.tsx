


import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export const unstable_settings = {
  // Sets 'HomeStack' as the initial route for the (tabs) group
  initialRouteName: "HomeStack",
};

export default function TabLayout() {
  return (
    
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="create" >
        <Label>Create</Label>
        <Icon sf="plus.circle" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="friends" >
        <Label>Friends</Label>
        <Icon sf="person.2" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile" >
        <Label>Profile</Label>
        <Icon sf="person" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="searchVaults" role="search" >
        <Label>Search</Label>
        <Icon sf="magnifyingglass" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>
    </NativeTabs>
       );
}
