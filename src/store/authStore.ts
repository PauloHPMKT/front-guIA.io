import { defineStore } from "pinia";
import { User } from "../types/User";
import { Accounts } from "../types/Accounts";
import { UserService } from "../services/users/user.service";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: {} as User,
    pageTransition: false,
  }),
  persist: true,
  actions: {
    async loginAccount(data: Accounts.toLogin) {  
      const response = await UserService.login(data);
      return response;
    },

    setCurrentUser(user: User) {
      this.$state.currentUser = user;
    }
  }
})
