import { AuthProvider } from "@/src/context/AuthContext";
import { Stack } from "expo-router";

export default function App() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
