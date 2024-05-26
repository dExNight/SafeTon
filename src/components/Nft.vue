<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  img: String,
  suspicion: String,
});

// #0f2442
</script>

<template>
  <div class="nft-elem">
    <img :src="props.img" height="70%" width="100%" />
    <p class="nft-name">{{ props.name }}</p>
    <p
      class="suspicion"
      :style="{
        color:
          props.suspicion === 'SCAM'
            ? '#d40202'
            : '#23db2c',
      }"
    >
      {{ props.suspicion }}
    </p>
  </div>
</template>

<style scoped>
.nft-elem {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;

  background-color: rgba(51, 51, 51, 0.5); /* 50% прозрачности */
  border-radius: 20px;
  overflow: auto;

  width: 180px;
  height: 245px;

  flex-direction: column;

  font-family: Montserrat, sans-serif;
  color: white;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 36px;

  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

img {
  margin-top: 0;
  margin-bottom: 0;
}

p {
  margin: 0;
  margin-bottom: 0px;
}

.suspicion {
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
}

@media (max-width: 403px) {
  .nft-elem {
    width: 160px;
    height: 215px;

    min-width: 160px;
    min-height: 215px;

    font-size: 16px;
    line-height: 30px;
  }

  .suspicion {
    color: #d40202;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
  }
}

@media (max-width: 362px) {
  .nft-elem {
    width: 140px;
    height: 185px;

    min-width: 140px;
    min-height: 185px;

    font-size: 13px;
    line-height: 26px;
  }

  .suspicion {
    color: #d40202;
    font-weight: 600;
    font-size: 13px;
    line-height: 26px;
  }
}

@media (max-width: 321px) {
  .nft-elem {
    width: 110px;
    height: 155px;

    min-width: 110px;
    min-height: 155px;

    font-size: 10px;
    line-height: 22px;
  }

  .suspicion {
    color: #d40202;
    font-weight: 600;
    font-size: 10px;
    line-height: 22px;
  }
}
</style>
