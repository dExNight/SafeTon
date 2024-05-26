<script setup lang="ts">
import Nft from "./Nft.vue";
import { getUserNFTsList } from "../hooks/fetchUserData";
import type { NftType } from "../hooks/fetchUserData";
import { onMounted, onUnmounted, ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  wallet_address: String,
});

const nfts = ref<NftType[]>([]);

onMounted(async () => {
  console.log("Fetching NFTs for wallet address: ", props.wallet_address);
  if (props.wallet_address) {
    const result = await getUserNFTsList(props.wallet_address);
    if (result) {
      nfts.value = result;
    }
  }
});

onUnmounted(() => {
  nfts.value = [];
});
</script>

<template>
  <div class="nft-page">
    <Nft v-for="(nft, index) in nfts" :key="index" v-bind="nft" />
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

  width: 98%;
  height: 90%;

  margin-right: 1%;
  margin-left: 1%;
}
</style>
