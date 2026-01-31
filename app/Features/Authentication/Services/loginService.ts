import { auth } from "@/src/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginRequest } from "../Models/LoginRequest";

export const login = async (request: LoginRequest) => {
  const { email, password } = request;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredential.user;
};
