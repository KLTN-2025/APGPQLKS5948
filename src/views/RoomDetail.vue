<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold text-center mb-8">Chi tiết phòng ID: {{ id }}</h1>
    <p class="text-center text-gray-700">Thông tin chi tiết về phòng {{ id }} sẽ được hiển thị ở đây.</p>
    <div class="flex justify-center mt-5">
      <button @click="$router.back()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Quay lại
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomDetail',
  props: ['id'], // Nhận ID từ router params
};
</script>