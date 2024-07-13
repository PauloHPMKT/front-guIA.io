<script setup lang="ts">
import { ref } from 'vue';
import FormLogin from '../components/FormLogin/index.vue';
import FormRegister from '../components/FormRegister/index.vue';
import { UserService } from '../services/users/user.service';
import logo from '../assets/img/guIA.png';

const loginForm = ref(true);

async function handleLogin(data: any) {
  const userService = UserService;
  await userService.login(data);
}
</script>

<template>
  <div class="h-screen flex justify-center items-center">
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
  <!-- <transition name="fade">
    <PageTransition 
      v-if="isLoading" 
      :username="authStore.currentUser.username!" 
      ref="loader" 
    />
    <div class="h-screen relative flex flex-col justify-center items-center">
      <BackTo 
        message="Voltar para a Home" 
        @navigateAction="toHomePage" 
      />
    </div>
  </transition> -->
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