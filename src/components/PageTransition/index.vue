<script setup lang="ts">
import { computed } from 'vue';
import { useHelper } from "../../composables/useHelper";
import loadingBot from "../../assets/lottie/loadingBot.json";

const { truncateText } = useHelper();

interface LoadingProps {
  username: string | null;
}

const props = defineProps<LoadingProps>();

const loadingTitle = computed(() => (
  localStorage.getItem('access_token')
    ? `Olá ${truncateText(String(props.username))}, que bom te ver por aqui!`
    : 'Carregando Workspace...'
));
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-white"> 
    <div>
      <Vue3Lottie              
        :animationData="loadingBot"
        :height="150"
        :width="150"
        :loop="true"
        :speed="3"
      />
      <span class="text-gray-950 font-semibold text-[20px]">
        {{ loadingTitle }}
      </span>
    </div>
  </div>
</template>