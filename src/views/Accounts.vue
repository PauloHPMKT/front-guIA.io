<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FormLogin from '../components/FormLogin/index.vue';
import FormRegister from '../components/FormRegister/index.vue';
import PageTransition from '../components/PageTransition/index.vue';
import { Accounts } from '../types/Accounts';
import { useAuthStore } from '../store/authStore';
import logo from '../assets/img/guIA.png';

const authStore = useAuthStore();
const router = useRouter();
const loginForm = ref(true);
const isLoading = ref(false);
const timeout = 3000;

async function handleLogin(data: Accounts.toLogin) {
  const request = data;

  try {
    isLoading.value = true;
    const authLogin = await authStore.loginAccount(request)
    const { data, status } = authLogin;
    
    if (status === 200) {
      const user = data.user;
      authStore.setCurrentUser(user);

      setTimeout(() => {
        isLoading.value = false;
        localStorage.setItem('access_token', data.access_token);
        router.push({ name: 'dashboard' })
      }, timeout);
    }
  } catch (error) {
    // encerrar o loading 
    // exibir um toast com uma mensagem de erro
  }
}
</script>

<template>
  <transition name="fade">
    <PageTransition 
      v-if="isLoading" 
      :username="authStore.$state.currentUser?.username" 
      ref="loader" 
    />
    <div v-else class="h-screen flex justify-center items-center">
      <div class="flex flex-col w-[400px] justify-center">
        <figure class="text-center">
          <img
            :src="logo"
            alt="Logo da GuIA"
            class="w-[180px] mx-auto"
          />
          <figcaption>
            <h3 v-if="loginForm" class="text-gray-950 mt-4 font-semibold">Área de Login</h3>
          </figcaption>
          <div class="flex items-center justify-center">
            <p class="my-6 mr-1">
              {{ loginForm 
                ? 'Ainda não criou sua Workspace?' 
                : 'Já possui uma conta?' 
              }}
            </p>
            <span
              @click="loginForm = !loginForm"
              class="text-blue-600 cursor-pointer hover:underline">
              {{ loginForm ? 'Criar' : 'Faça Login' }}
            </span>
          </div>
        </figure>
        <FormLogin v-if="loginForm" @login="handleLogin" />
        <FormRegister v-else />
      </div>
    </div>
  </transition>
  <!-- <div class="h-screen relative flex flex-col justify-center items-center">
      <BackTo 
        message="Voltar para a Home" 
        @navigateAction="toHomePage" 
      />
    </div> -->
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>