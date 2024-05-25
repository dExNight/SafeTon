<script setup lang="ts"></script>

<template>
  <div class="nft-elem">
    <img src="../assets/nft.png" height="70%" width="80%" />
    <p class="nft-name">Passport</p>
    <p class="suspicion">SCAM</p>
  </div>
</template>

<style scoped>
.nft-elem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 0;
  margin-bottom: 0%;
  margin-left: 0;
  margin-right: 0;

  background-color: rgba(51, 51, 51, 0.5); /* 50% прозрачности */
  border-radius: 20px;
  overflow: auto;

  width: 180px;
  height: 245px;

  flex-direction: column;
  color: white;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 36px;
}

img {
  margin-top: 10%;
  margin-bottom: 5%;
}

p {
  margin: 0;
  margin-bottom: 0px;
}

.suspicion {
  color: red;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
}
</style>
