<script setup lang="ts"></script>

<template>
  <div class="jetton-elem">
    <img src="../assets/suspicious_jetton.png" height="45px" />

    <div class="jetton-info">
      <p class="name">KINGY</p>
      <p class="suspicion">Suspicious</p>
    </div>

    <p class="amount">1000</p>
  </div>
</template>

<style scoped>
.jetton-elem {
  width: 90%;
  height: 15%;

  display: flex;
  align-items: center;

  margin-bottom: 20px;

  min-height: 70px;
  min-width: 300px;
  background-color: rgba(100, 51, 51, 0.5); /* 50% прозрачности */
  color: white;

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.amount {
  margin-left: auto;
  margin-right: 15px;

  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 36px;
}

img {
  margin-left: 15px;
  margin-right: 20px;
}

.jetton-info {
  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 7px;
  height: 100%;
}

.name {
  margin: 0;
}

.suspicion {
  margin: 0;

  color: brown;
  font-weight: 600;
}
</style>
