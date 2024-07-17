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

  function toggleTheme(theme: string) {
    themeStore.toggleTheme(theme);
  }

  function getActiveTheme(theme: string) {
    console.log(themeStore.theme, theme)
    return themeStore.theme === theme;
  }

  return {
    toggleTheme,
    getActiveTheme,
    themeStore,
  }
}
