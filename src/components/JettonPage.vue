<script setup lang="ts">
import { ref, inject, type Ref, onUnmounted } from "vue";
import type { JettonType } from "../hooks/fetchUserData";
import { onMounted } from "vue";
import { getUserJettonsList } from "../hooks/fetchUserData";
import Jetton from "./Jetton.vue";

const props = defineProps({
  wallet_address: String,
});

const jettons = ref<JettonType[]>([]);

onMounted(async () => {
  console.log("Fetching Jettons for wallet address: ", props.wallet_address);
  if (props.wallet_address) {
    const result = await getUserJettonsList(props.wallet_address);
    if (result) {
      jettons.value = result;
    }
  }
});

onUnmounted(() => {
  jettons.value = [];
});
</script>

<template>
  <div class="wallet-jettons">
    <Jetton v-for="(jetton, index) in jettons" :key="index" v-bind="jetton" />
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
