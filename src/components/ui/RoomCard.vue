<template>
  <router-link :to="link" class="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <img :src="image" :alt="title" class="w-full h-72 object-cover">
    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-700 mb-4">{{ description }}</p>
      <div class="mb-4">
        <p class="text-lg font-semibold text-primary-600">{{ price }}</p>
        <p class="text-sm text-gray-500">Giá có thể thay đổi tùy thuộc vào thời điểm.</p>
      </div>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li v-for="feature in features.split(',')" :key="feature.trim()">{{ feature.trim() }}</li>
      </ul>
      <span class="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
        Xem Chi Tiết Phòng
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RoomCard',
  props: {
    image: String,
    title: String,
    description: String,
    price: String,
    features: String, // Chuỗi các tính năng cách nhau bằng dấu phẩy
    link: String,
  },
};
</script>