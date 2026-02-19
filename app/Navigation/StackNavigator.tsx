import { useAuth } from "@/src/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../Features/Authentication/Screens/Login";
import Password from "../Features/Authentication/Screens/Password";
import Register from "../Features/Authentication/Screens/Register";
import Username from "../Features/Authentication/Screens/Username";
import OnboardingScreen from "../Onboarding/Onboarding";
import SplashScreen from "../SplashScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  const InsideStackNavigator = () => (
    <InsideStack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: false,
      }}
    >
      <InsideStack.Screen name="TabNavigator" component={TabNavigator} />
    </InsideStack.Navigator>
  );

  const AuthStackNavigator = () => (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        gestureEnabled: false,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Password" component={Password} />
      <AuthStack.Screen name="Username" component={Username} />
      <AuthStack.Screen name="TabNavigator" component={TabNavigator} />
    </AuthStack.Navigator>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Inside" component={InsideStackNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

// const [isLoggedIn, setIsLoggedIn] = useState(false); //change all this later to use Async storage
// const [showSplash, setShowSplash] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowSplash(false);
//   }, 2000);

//   return () => clearTimeout(timer);
// }, []);

// if (showSplash) {
//   return <SplashScreen />;
// }

// Render your navigation stack after splash
