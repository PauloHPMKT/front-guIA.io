import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light'
  }),
  persist: true,
  actions: {
    toggleTheme(theme: string) {
      this.theme = theme === 'light' ? 'dark' : 'light'
      // this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
})