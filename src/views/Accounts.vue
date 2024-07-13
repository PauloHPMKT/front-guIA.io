<script setup lang="ts">
import FormLogin from '../components/FormLogin/index.vue';
import logo from '../assets/img/guIA.png';
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col w-[400px] justify-center">
      <figure class="text-center">
        <img
          :src="logo"
          alt="Logo da GuIA"
          class="w-[250px] mx-auto"
        />
        <figcaption>
          <h3 class="text-gray-950 mt-4 font-semibold">Área de Login</h3>
        </figcaption>
        <div class="flex items-center justify-center">
          <p class="my-6 mr-1">Ainda não criou sua Workspace?</p>
          <span class="text-blue-600 cursor-pointer hover:underline">
            Registrar
          </span>
        </div>
      </figure>
      <FormLogin />
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
      <FormLogin />
      oi
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