import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export const unstable_settings = {
  // Sets 'HomeStack' as the initial route for the (tabs) group
  initialRouteName: "HomeStack",
};

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>{""}</Label>
        <Icon sf="house" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="Create">
        <Label>{""}</Label>
        <Icon sf="plus.circle" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="friends">
        <Label>{""}</Label>
        <Icon sf="person.3" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>{""}</Label>
        <Icon sf="person" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="searchVaults" role="search">
        <Icon sf="folder" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
