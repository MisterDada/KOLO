import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../src/firebase/firebase";
import { RegisterRequest } from "../Models/RegisterRequest";

export const signup = async (request: RegisterRequest) => {
  const { email, password } = request;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredential.user;
};
