<!-- components/ScrollToTopButton.vue -->
<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false); // Trạng thái hiển thị của nút

const handleScroll = () => {
  // Hiển thị nút khi cuộn xuống một khoảng nhất định (ví dụ: 200px)
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Cuộn mượt mà
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Không cần thêm style cụ thể nếu đã dùng Tailwind CSS */
</style>