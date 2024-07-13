import { axiosInstance } from "../api";
import { Accounts } from "../../types/Accounts";

export class UserService {
  public static async login({ email, password }: Accounts.toLogin): Promise<void> {
    try {
      console.log(email, password);
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      return response?.data;
    } catch (error) {
      console.error("Failed to login", error);
      throw error;
    }
  }
}
