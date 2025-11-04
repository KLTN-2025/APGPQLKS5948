<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Image Section - Full width top -->
    <img :src="image" :alt="title" class="w-full h-64 object-cover">

    <!-- Content Section -->
    <div class="p-6">
      <!-- "DỊCH VỤ CHẤT LƯỢNG" remains consistent -->
      <p class="text-sm font-semibold text-gray-500 uppercase mb-2">DỊCH VỤ CHẤT LƯỢNG</p>
      
      <!-- Title -->
      <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ title }}</h3>
      
      <!-- Description -->
      <p class="text-gray-700 mb-6 line-clamp-3">{{ description }}</p>
      
      <!-- Button -->
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
        ĐỌC THÊM
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style scoped>

</style>