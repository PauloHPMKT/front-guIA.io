import { watchEffect } from "vue";
import { useThemeStore } from "../store/themeStore";

export const useTheme = () => {
  const themeStore = useThemeStore()

  watchEffect(() => {
    if (themeStore.theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });

  function toggleTheme() {
    themeStore.toggleTheme();
  }

  return {
    toggleTheme
  }
}
