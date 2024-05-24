<script setup lang="ts">
import { ref, inject, type Ref } from "vue";
import Jetton from "./Jetton.vue";

const connectedAddress = inject("connectedAddress") as Ref<string> | undefined;

const slashed_address = (address: string) => {
  if (address) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }
  return "";
};

const copyToClipboard = async () => {
  try {
    if (connectedAddress?.value) {
      await navigator.clipboard.writeText(connectedAddress.value);
      console.log("Address copied to clipboard");
    }
  } catch (err) {
    console.error("Failed to copy address: ", err);
  }
};
</script>

<template>
  <div class="wallet-page">
    <div class="wallet-info">
      <div class="balance">
        <img class="balance-image" src="../assets/toncoin.png" height="30px" />
        <p class="balance-value">1.88</p>
      </div>
      <p class="address" v-if="connectedAddress" @click="copyToClipboard">
        {{ slashed_address(connectedAddress) }}
      </p>
    </div>

    <div class="wallet-jettons">
      <component v-bind:is="Jetton" />
      <component v-bind:is="Jetton" />
      <component v-bind:is="Jetton" />
      <component v-bind:is="Jetton" />
      <component v-bind:is="Jetton" />
      <component v-bind:is="Jetton" />
      <component v-bind:is="Jetton" />
    </div>
  </div>
</template>

<style scoped>
.wallet-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  background-color: #0f1620;

  overflow-x: hidden;
  overflow-y: scroll;
}

.wallet-info {
  display: flex;
  margin-bottom: auto;
  flex-direction: column;

  margin-top: 5%;
  margin-bottom: 5%;

  color: white;

  width: 100%;
}

.balance {
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 40px;
  gap: 10px;

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
}

.balance-value {
  display: flex;
  justify-content: center;
}

.address {
  display: flex;
  justify-content: center;

  margin-top: 10px;
  color: #8994a3;
}

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
