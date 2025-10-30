<template>
  <div class="relative w-full h-80 lg:h-full lg:min-h-[500px] overflow-hidden rounded-lg shadow-md">
    <!-- Hình ảnh bản đồ giả định. Thay thế bằng ảnh thật hoặc Google Maps Embed -->
    <img src="https://i.pinimg.com/1200x/93/6a/86/936a86d2940acc0f733c5f1b94220fff.jpg" alt="Bản đồ vị trí" class="absolute inset-0 w-full h-full object-cover object-center">
    <!-- Nút "Xem bản đồ lớn hơn" -->
    <a href="#" class="absolute top-4 left-4 bg-white bg-opacity-90 hover:bg-opacity-100 transition-all px-4 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700">
      Xem bản đồ lớn hơn
    </a>
  </div>
</template>

<script setup>
// Không cần script setup nhiều nếu chỉ là ảnh tĩnh
</script>

<style scoped>
/* Có thể thêm các style tùy chỉnh nếu cần */
</style>