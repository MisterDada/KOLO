import { AuthProvider } from "@/src/context/AuthContext";
import StackNavigator from "./Navigation/StackNavigator";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
