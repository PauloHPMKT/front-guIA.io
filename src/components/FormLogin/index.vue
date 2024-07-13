<script setup lang="ts">
import { reactive } from "vue";
import InputField from "../InputField/index.vue";
import MainButton from "../MainButton/index.vue";

const loginData = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <form
    @submit.prevent=""
    class="w-[400px] flex flex-col gap-4 justify-center items-center"
  >
    <div class="flex flex-col gap-5 w-full">
      <InputField 
        placeholder="E-mail de Usuário" 
        v-model="loginData.email" 
      />
      <InputField
        placeholder="Sua Senha"
        :isPassword="true"
        v-model="loginData.password"
      />
      <MainButton 
        type="submit"
        class="w-full h-14 bg-black text-white px-4 py-2 rounded-md"
      >
        Entrar 
      </MainButton>
    </div>
  </form>
</template>