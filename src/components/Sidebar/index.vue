<script setup lang="ts">
import logo from "../../assets/img/guIA.png";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToDashboard = () => {
  router.push({ name: "dashboard" });
};
</script>

<template>
  <aside class="px-4 bg-dark-1000 min-h-screen bg-dark-blue w-72">
    <div @click="navigateToDashboard" class="image_container">
      <img :src="logo" alt="Logo guIA" />
    </div>
    <sidebar-plugins />
  </aside>
</template>

<style scoped>
.image_container {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  border-bottom: 1px solid #6767676f;
}
img {
  width: 120px;
  filter: invert(1);
}
</style>

