<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import Content from './Content.vue';
import CardUser from '../../components/CardUser/index.vue';
import Sidebar from '../../components/Sidebar/index.vue';
import { useAuthStore } from '../../store/authStore';
import { useHelper } from '../../composables/useHelper';
import { useOnMounted } from '../../composables/useOnMounted';

const authStore = useAuthStore();
const { truncate, greetings } = useHelper();
const { dateTimeFormated } = useOnMounted();

const cardUser = ref<InstanceType<typeof CardUser> | null>(null)

const themeModeCard = ref(false);

const getUsername = computed(() => {
  const currentUsername = authStore.$state.currentUser.username;
  return truncate(currentUsername!);
});

const greetingsMessage = computed(() => {
  return `${greetings()}, ${getUsername.value}👋`;
});

function showProfileCard() {
  cardUser.value?.open()
}

function showThemeProvider() {
  themeModeCard.value = !themeModeCard.value;
}

onMounted(() => {
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cardUser.value?.close();
      themeModeCard.value = false;
    }
  })
});
</script>

<template>
  <div class="flex w-full h-screen">
    <Sidebar />
    <div class="w-[82%]">
      <header class="flex justify-between items-center flex-none h-[10vh] sticky top-0 left-0 bg-background-light dark:bg-background-dark z-50 py-3 px-5">
        <div class="flex flex-col">
          <p class="font-semibold text-text-light dark:text-text-dark">{{ greetingsMessage }}</p>
          <span class="text-[#a3a3a3]">{{ dateTimeFormated() }}</span>
        </div>
        <div
          class="flex items-center gap-3 text-[2rem] text-[#aeaeae] rounded-full bg-header-light dark:bg-header-dark mr-5 cursor-pointer transition duration-300 ease-in-out"
        >
          <Icon
            @click="showProfileCard"
            icon="teenyicons:user-circle-solid" id="cardUser" 
          />
        </div>
        <CardUser 
          ref="cardUser" 
          @open-theme-config="showThemeProvider"
        />
      </header>
      <main class="bg-slate-200 dark:bg-background-dark h-full text-text-light dark:text-text-dark">
        <Content />
      </main>
     </div>
  </div>
</template>