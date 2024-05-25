<script setup lang="ts">
import Nft from "./Nft.vue";
</script>

<template>
  <div class="nft-page">
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
    <component v-bind:is="Nft" />
  </div>
</template>

<style scoped>
.nft-page {
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;

  gap: 5vh;
  margin-top: 0;

  width: 100%;
  height: 100%;
}
</style>
