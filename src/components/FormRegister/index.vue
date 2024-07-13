<script setup lang="ts">
import { reactive } from "vue";
import InputField from "../InputField/index.vue";
import MainButton from "../MainButton/index.vue";

const formData = reactive({
  username: "",
  nickname: "",
  email: "",
  password: "",
  ConfirmPassword: "",
});
</script>

<template>
  <form
    @submit.prevent=""
    class="w-[400px] flex flex-col gap-4 justify-center items-center"
  >
    <div class="flex flex-col gap-5 w-full">
      <InputField
        placeholder="Nome de Usuário" 
        v-model="formData.username" 
      />
      <InputField 
        placeholder="Nickname" 
        v-model="formData.nickname" 
      />
      <InputField 
        placeholder="E-mail de Usuário" 
        v-model="formData.email" 
      />
      <InputField
        placeholder="Senha"
        :isPassword="true"
        v-model="formData.password"
      />
      <InputField
        placeholder="Confirmar Senha"
        :isPassword="true"
        v-model="formData.ConfirmPassword"
      />
      <MainButton 
        type="submit"
        class="w-full h-14 bg-black text-white px-4 py-2 rounded-md"
      >
        Criar Workspace 
      </MainButton>
    </div>
  </form>
</template>