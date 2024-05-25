<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  imageUrl: String,
  link: String,
});

const redirectToLink = () => {
  if (props.link) {
    window.location.href = props.link;
  }
};
</script>

<template>
  <div class="banner-elem">
    <img :src="props.imageUrl" @click="redirectToLink" />
  </div>
</template>

<style scoped>
.banner-elem {
  height: 15%;

  display: flex;
  align-items: center;

  margin-bottom: 20px;
  margin-left: 20px;

  min-height: 100%;
  min-width: 200px;

  max-width: 200px;
  max-height: 100px;

  background-color: aliceblue; /* 50% прозрачности */
  color: white;

  border-radius: 10px;

  overflow: hidden;
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
  /* margin-left: 15px;
  margin-right: 20px; */

  height: 100%;
  width: 100%;
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
