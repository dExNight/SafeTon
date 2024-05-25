<script setup lang="ts">
import { ref, inject, type Ref } from "vue";
import Jetton from "./Jetton.vue";
</script>

<template>
  <div class="wallet-jettons">
    <component v-bind:is="Jetton" />
    <component v-bind:is="Jetton" />
   
  </div>
</template>

<style scoped>
.wallet-jettons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 0;

  width: 100%;
  height: 100%;
}
</style>
