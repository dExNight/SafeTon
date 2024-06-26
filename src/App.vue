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
import Wallet from "./components/JettonPage.vue";
import NFT from "./components/NftPage.vue";
import Banner from "./components/Banner.vue";
import { getBalance } from "./hooks/fetchUserData";

const selectedNavItem: Ref = ref("Jettons");

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
const connectionStatus = ref(false);

const wallet_balance = ref();

let currentApp: any = shallowRef(Wallet);

const slashed_address = (address: string) => {
  if (address) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }
  return "";
};

const copyToClipboard = async () => {
  try {
    if (connected_address?.value) {
      await navigator.clipboard.writeText(connected_address.value);
      console.log("Address copied to clipboard");
    }
  } catch (err) {
    console.error("Failed to copy address: ", err);
  }
};

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
      if (selectedNavItem.value === "Jettons") {
        console.log("Jettons Immediate");
        currentApp.value = Wallet;
      } else if (selectedNavItem.value === "NFTs") {
        currentApp.value = NFT;
      }
    },
    { immediate: true }
  );

  watch(
    connected_address,
    async () => {
      if (connected_address.value) {
        setData(wallet_balance, await getBalance(connected_address.value));
      } else {
        setData(wallet_balance, null);
      }
    },
    { immediate: true }
  );
});

const joinUsImg =
  "https://raw.githubusercontent.com/dExNight/ProjectConfigurations/main/SafeTon/joinTG.jpg";
const telegramLink = "https://t.me/dex_night";

const GithubImg =
  "https://raw.githubusercontent.com/dExNight/ProjectConfigurations/main/SafeTon/myGithub.jpg";
const devGithubLink = "https://github.com/dExNight";

const hackathonImg =
  "https://raw.githubusercontent.com/dExNight/ProjectConfigurations/main/SafeTon/OLHackathon.jpg";
const hackathonLink =
  "https://dorahacks.io/hackathon/the-open-league-hackathon";
</script>

<template>
  <div id="header"></div>

  <div id="main">
    <div class="wallet-info" v-if="wallet_balance">
      <div class="balance">
        <img class="balance-image" src="./assets/toncoin.png" height="30px" />
        <p class="balance-value">{{ wallet_balance }}</p>
      </div>
      <p class="address" v-if="connected_address" @click="copyToClipboard">
        {{ slashed_address(connected_address) }}
      </p>
    </div>

    <div class="slider">
      <component
        v-bind:is="Banner"
        v-bind:imageUrl="GithubImg"
        v-bind:link="devGithubLink"
      />
      <component
        v-bind:is="Banner"
        v-bind:imageUrl="joinUsImg"
        v-bind:link="telegramLink"
      />
      <component
        v-bind:is="Banner"
        v-bind:imageUrl="hackathonImg"
        v-bind:link="hackathonLink"
      />
    </div>

    <div id="navigation" v-if="connected_address">
      <div class="nav-item" @click="selectNavItem('Jettons')">
        <p :class="{ 'nav-text-selected': selectedNavItem === 'Jettons' }">
          Jettons
        </p>
      </div>

      <div class="nav-item" @click="selectNavItem('NFTs')">
        <p :class="{ 'nav-text-selected': selectedNavItem === 'NFTs' }">NFTs</p>
      </div>
    </div>
    <component
      v-if="connected_address"
      v-bind:is="currentApp"
      v-bind:wallet_address="connected_address"
    />
  </div>
</template>

<style scoped>
#header {
  height: 10%;
  min-height: 50px;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: auto;

  overflow: hidden;
}

#navigation {
  height: 10%;

  min-height: 50px;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10%;
  padding-right: 10%;

  gap: 20vh;
  overflow: hidden;

  margin-bottom: 2%;

  color: white;
  font-size: large;
  font-weight: 600;
}

#main {
  height: 90%;
  min-height: 250px;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-direction: column;

  margin-top: auto;
}

.wallet-info {
  display: flex;
  flex-direction: column;

  margin-top: 0%;
  margin-bottom: 0;

  color: white;

  width: 100%;
  height: auto;
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

.nav-text-selected {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 7px;
}

.slider {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  height: auto;
  width: 100%;

  min-height: 90px;

  overflow-x: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  margin-top: 5%;
  margin-bottom: 5%;
}

.slider::-webkit-scrollbar {
  display: none;
}
</style>
