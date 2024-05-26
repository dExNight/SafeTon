<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  img: String,
  value: Number,
  suspicion: String,
});
</script>

<template>
  <div
    class="jetton-elem"
    :style="{
      backgroundColor:
        props.suspicion === 'SCAM'
          ? 'rgba(51, 51, 51, 0.5)'
          : 'rgba(51, 51, 51, 0.5)',
    }"
  >
    <img :src="props.img" height="45px" />

    <div class="jetton-info">
      <p class="name">{{ props.name }}</p>
      <p
        class="suspicion"
        :style="{ color: props.suspicion === 'SCAM' ? '#d40202' : '#23db2c' }"
      >
        {{ props.suspicion }}
      </p>
    </div>

    <p class="amount">{{ props.value }}</p>
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
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
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
  font-weight: 600;
}
</style>
