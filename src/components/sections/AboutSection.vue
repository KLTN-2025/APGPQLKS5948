<template>
  <div class="container mx-auto px-4 mt-12 md:mt-20">
    <div class="mb-8">
      <p class="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">GIỚI THIỆU</p>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
        Tận hưởng trải nghiệm nghỉ dưỡng đích thực tại khách sạn của chúng tôi.
      </h2>
    </div>

    <!-- Phần ảnh và nội dung giới thiệu chi tiết (sẽ thêm sau) -->
    <!-- Như trong ảnh bạn có 2 ảnh nhỏ bên phải, bạn có thể thiết kế ở đây -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="order-2 md:order-1">
            <p class="text-gray-600 mb-4">
                Khách sạn của chúng tôi, được xây dựng từ năm 1995, đã và đang là một trong những điểm đến hàng đầu với dịch vụ khách hàng xuất sắc nhất. Chúng tôi tự hào mang đến không gian sang trọng, tiện nghi hiện đại và trải nghiệm nghỉ dưỡng không thể quên.
            </p>
            <p class="text-gray-600 mb-4">
                Từ những căn phòng được thiết kế tinh tế đến các tiện ích đẳng cấp thế giới như nhà hàng, spa và hồ bơi, mỗi chi tiết đều được chăm chút để đảm bảo sự thoải mái tối đa cho quý khách.
            </p>
            <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                Tìm hiểu thêm
            </button>
        </div>
        <div class="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Khách sạn" class="rounded-lg shadow-md col-span-2">
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Tiện nghi khách sạn" class="rounded-lg shadow-md col-span-1">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="Spa khách sạn" class="rounded-lg shadow-md col-span-1">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
/* Không cần thêm CSS tùy chỉnh nhiều nếu đã dùng Tailwind */
</style>