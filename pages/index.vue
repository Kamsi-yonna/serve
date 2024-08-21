<template>
  <div>
    <div v-if="data">
      <h1>Random Dog</h1>
      <img :src="data" alt="Random Dog" />
      {{ data }}
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <button @click="refetch">Fetch New Dog</button>
  </div>
</template>

<script setup lang="ts">
// import { NuxtImg } from '#build/components';
import useRandomDog from '@/composables/useRandomDog';

const { data, isLoading, refetch } = useRandomDog();
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 200px;
}
</style>
