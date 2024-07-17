import { axiosInstance } from "../api";
import { Accounts } from "../../types/Accounts";
import { AxiosResponse } from "axios";

export class UserService {
  public static async login(
    { email, password }: Accounts.toLogin
  ): Promise<AxiosResponse<any, any>> {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      return response;
    } catch (error) {
      console.error("Failed to login", error);
      throw error;
    }
  }
}
