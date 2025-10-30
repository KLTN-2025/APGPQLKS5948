<template>
  <div class="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between h-full">
    <blockquote class="text-gray-700 text-lg italic mb-6 leading-relaxed">
      "{{ quote }}"
    </blockquote>
    <div class="flex items-center mt-auto">
      <img :src="avatar" :alt="name" class="w-16 h-16 rounded-full object-cover mr-4 shadow-sm">
      <div>
        <p class="font-semibold text-lg text-gray-900">{{ name }}</p>
        <p class="text-sm text-gray-500">{{ title }}</p>
      </div>
      <!-- Icon quote lớn ở góc -->
      <div class="ml-auto text-gray-200 text-6xl font-serif">”</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Không cần style scoped nhiều với Tailwind */
</style>