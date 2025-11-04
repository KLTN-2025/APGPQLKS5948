<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-6xl font-bold text-gray-800">404</h1>
    <p class="text-2xl text-gray-600 mt-4">Không tìm thấy trang này</p>
    <router-link to="/" class="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
      Quay về Trang chủ
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>