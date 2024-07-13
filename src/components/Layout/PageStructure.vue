<script setup lang="ts">
import { watchEffect } from 'vue';
import Content from './Content.vue';
import { useThemeStore } from '../../store/themeStore';

const themeStore = useThemeStore();

watchEffect(() => {
  if (themeStore.theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

const toggleTheme = () => {
  themeStore.toggleTheme();
}
</script>

<template>
  <div class="flex w-full h-screen">
    <div class="bg-dark-blue w-72">
      conteudo 1
      <button @click="toggleTheme">Change theme color</button>
    </div>
    <div class="w-[82%]">
      <header class="flex justify-between items-center flex-none h-[10vh] sticky top-0 left-0 bg-background-light dark:bg-background-dark z-50 py-3 px-5">
        <div class="flex flex-col">
          <p class="font-semibold text-text-light dark:text-text-dark">{{ "greetingsMessage" }}</p>
          <span class="text-[#a3a3a3]">{{ "dateTimeFormated()" }}</span>
        </div>
        <div
          class="flex items-center gap-3 text-[2rem] text-[#aeaeae] rounded-full bg-header-light dark:bg-header-dark mr-5 cursor-pointer transition duration-300 ease-in-out"
        >
          <Icon icon="teenyicons:user-circle-solid" id="cardUser" />
        </div>
      </header>
      <main class="dark:bg-background-dark h-full text-text-light dark:text-text-dark">
        <Content />
      </main>
     </div>
  </div>
</template>