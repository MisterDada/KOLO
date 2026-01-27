import { User } from "../../User/Models/User";

export interface AuthResponse {
  accessToken: string;
  user: User;
}
