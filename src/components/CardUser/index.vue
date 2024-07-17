<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { useAuthStore } from '../../store/authStore';
import { useHelper } from '../../composables/useHelper';

const router = useRouter();
const authStore = useAuthStore();
const { truncateText } = useHelper();

const emit = defineEmits(['openThemeConfig'])
const isCardVisible = ref(false);

const redirectToProfile = () => {
  router.push({ name: 'profile' });
  close();
};

const open = () => {
  isCardVisible.value = true;
};

const close = () => {
  isCardVisible.value = false;
};

const logout = () => {
  console.log('logout');
};

defineExpose({
  open,
  close,
  isCardVisible
})
</script>

<template>
  <div
    v-if="isCardVisible"
    class="absolute top-12 right-16 z-10 dark:bg-card-dark bg-background-light rounded-xl shadow-2xl min-w-54 border-[1px] border-slate-200 dark:border-dark-blue"
  >
    <div class="p-4 pb-[15px] border-b-2 dark:border-dark-blue">
      <p class="text-zinc-950 dark:text-text-dark">
        {{ truncateText(authStore.$state.currentUser.email as string) }}
      </p>
      <div>
        <!-- Essa informação deverá vim de alguma camada de persistencia -->
        <p class="uppercase text-[14px] mt-4 bg-gray-200 rounded-lg text-center">Plano free</p>
      </div>
    </div>
    <ul id="menu" class="p-4 flex flex-col gap-[4px] [&_li]:cursor-pointer transition">
      <li @click="redirectToProfile" class="list-item">
        <p  class=" list-item-detail">Meu perfil</p>
      </li>
      <li class="list-item">
        <div
          @click="logout"
          class="flex items-center cursor-pointer transition rounded-md"
        >
          <p class="pr-4 list-item-detail">Sair</p>
          <Icon icon="tabler:logout" class="list-item-detail" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-item {
  @apply hover:bg-slate-100 
    dark:hover:bg-gray-700 
    rounded-md 
    px-3 
    py-2
}
.list-item-detail {
  @apply dark:text-text-dark 
    text-zinc-950
}
.active {
  @apply bg-slate-200 
    dark:bg-gray-500
}
</style>