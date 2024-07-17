<script setup lang="ts">
import { onMounted, ref } from "vue";
//import userService from "../../services/user.service";
//import { Account } from "../../types/account";
import { useAuthStore } from "../../store/authStore";
import { useTheme } from '../../composables/useTheme';
import lightMode from '../../assets/img/light.png';
import darkMode from '../../assets/img/dark.png';

const authStore = useAuthStore();
const { toggleTheme, themeStore } = useTheme();

const userData = ref({
  username: "",
  email: "",
});
const theme = ref(themeStore.$state.theme);

// const updateUser = async (data: Account.Update, id: string) => {
//   await userService.updateUserInfo(id, data);

//   const currentUserData: Partial<Account.Update> = {
//     username: data.username,
//     email: data.email,
//   };
//   authStore.getCurrentUser(currentUserData);
// };

onMounted(() => {
  userData.value.username = authStore.$state.currentUser.username ?? "";
  userData.value.email = authStore.$state.currentUser.email ?? "";
});
</script>

<template>
  <div class="profile_container">
    <div class="inner_header border-b-2 border-slate-300 dark:border-border-dark pb-[20px]">
      <h2>Área do usuário</h2>
    </div>
    <form
      @submit.prevent=""
      class="flex gap-3 flex-col items-start w-full"
    >
      <div class="w-[80%] flex gap-3">
        <div class="flex flex-col w-1/2">
          <label for="username">Nome do usuário</label>
          <input
            type="text"
            id="username"
            v-model="userData.username"
            placeholder="Nome de usuário"
            class="border-2 border-slate-300 rounded-md p-2 text-gray-950"
          />
        </div>
        <div class="flex flex-col w-1/2">
          <label for="email">E-mail do usuário</label>
          <input
            type="email"
            v-model="userData.email"
            placeholder="E-mail de usuário"
            class="border-2 border-slate-300 bg-slate-50 rounded-md p-2 disabled:opacity-60 text-gray-950"
            disabled
          />
        </div>
      </div>
      <button type="submit" class="w-[80px] bg-black text-white rounded-lg">
        Salvar
      </button>
    </form>
    <div class="inner_header border-y-2 border-slate-300 dark:border-border-dark py-5">
      <h3 class="text-2xl">Definições de tema</h3>
      <p>Escolha uma definição de tema para visualizar o guIA. Selecione um tema com as preferências do seu sistema.</p>
      <div
        class="dark:text-text-dark border-[1px] border-slate-200 dark:border-dark-blue py-2 w-80 h-32 flex gap-4"
      >
        <div class="flex flex-col justify-center">
          <label for="light" class="cursor-pointer text-[14px] font-semibold">
            <div 
              :class="['rounded-2xl', 'border-4', theme === 'light' ? 'border-cyan-800' : 'border-transparent', 'hover:border-4', 'hover:border-cyan-800', 'overflow-hidden']"
            >
              <img :src="lightMode" alt="light" class="w-full h-full">
            </div>
            Claro
          </label>
          <input type="radio" id="light" name="theme" value="light" v-model="theme" @input="toggleTheme(theme)" class="hidden" />
        </div>
        <div class="flex flex-col justify-center">
          <label for="dark" class="cursor-pointer text-[14px] font-semibold">
            <div 
              :class="['rounded-2xl', 'border-4', theme === 'dark' ? 'border-cyan-800' : 'border-transparent', 'hover:border-4', 'hover:border-cyan-800', 'overflow-hidden']"
            >
              <img :src="darkMode" alt="dark">
            </div>
            Escuro
          </label>
          <input type="radio" id="dark" name="theme" value="dark" v-model="theme" @input="toggleTheme(theme)" class="hidden" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile_container {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
}
.inner_header {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px 0;
}
h2 {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
