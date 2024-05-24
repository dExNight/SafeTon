<script setup lang="ts">
import Header from "./components/Header.vue";
import {
  createApp,
  onMounted,
  provide,
  reactive,
  ref,
  shallowRef,
  watch,
  type Ref,
} from "vue";
import {
  useTonConnect,
  subscribeTonConnectChanges,
} from "./hooks/useTonConnect";
import Wallet from "./components/Wallet.vue";
import History from "./components/History.vue";
import NFT from "./components/NFT.vue";

const selectedNavItem: Ref = ref("Wallet");

function setData(reference: Ref, data: any) {
  reference.value = data;
}

const selectNavItem = (navItem: string) => {
  selectedNavItem.value = navItem;
  console.log(selectedNavItem.value);
};

const ton_connect = ref();
const unsubscribe = ref(null);
const userWallet = ref(null);

const connected_address = ref(null);
provide("connectedAddress", connected_address);

// Dynamic data
const connectionStatus = ref(false);

let currentApp: any = shallowRef(Wallet);;

onMounted(() => {
  const header = createApp(Header);

  header.mount("#header");

  // Get and set TonConnectUI
  const { tonConnectUI } = useTonConnect();
  setData(ton_connect, tonConnectUI);

  // Subscribe to TonConnect changes
  const { unsubscribe: unsubscribeValue } = subscribeTonConnectChanges(
    ton_connect.value,
    connectionStatus,
    userWallet,
    connected_address
  );

  setData(unsubscribe, unsubscribeValue);

  watch(
    selectedNavItem,
    () => {
      if (selectedNavItem.value === "Wallet") {
        currentApp.value = Wallet;
      } else if (selectedNavItem.value === "History") {
        currentApp.value = History;
      } else if (selectedNavItem.value === "NFT") {
        currentApp.value = NFT;
      }
    },
    { immediate: true }
  );
});
</script>

<template>
  <div id="header"></div>

  <div id="main">
    <component v-bind:is="currentApp" />
  </div>

  <div id="navigation">
    <div class="nav-item" @click="selectNavItem('Wallet')">Wallet</div>

    <div class="nav-item" @click="selectNavItem('History')">History</div>

    <div class="nav-item" @click="selectNavItem('NFT')">NFT</div>
  </div>
</template>

<style scoped>
#header {
  height: 10%;
  min-height: 50px;

  background-color: #0f1620;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: auto;

  overflow: hidden;
}

#navigation {
  height: 10%;
  min-height: 50px;

  background-color: lightblue;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10%;
  padding-right: 10%;

  overflow: hidden;

  margin-top: auto;
}

#main {
  height: 80%;
  min-height: 250px;

  background-color: #0f1620;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
