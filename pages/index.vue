<template>
  <div>
    <div v-if="data">
      <h1>Random Dog</h1>
      <img
        v-for="(dog, index) in data"
        :key="index"
        :src="dog"
        alt="Random Dog"
        loading="lazy"
      />
    </div>

    <div v-if="error">Error fetching dog images: {{ error.message }}</div>

    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <button @click="fetchDogs">Fetch New Dog</button>
  </div>
</template>

<script setup lang="ts">
import useRandomDog from '@/composables/useRandomDog';

const { data, isLoading, error, refetch } = useRandomDog(5);

const fetchDogs = () => {
  refetch();
};
</script>

<style scoped>
.dog-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

img {
  width: 200px;
  height: auto;
  border-radius: 8px;
}
</style>
