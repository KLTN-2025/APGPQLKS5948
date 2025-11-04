<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">Tin tức & Sự kiện</h1>
    <p class="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
      Cập nhật những tin tức mới nhất, các ưu đãi đặc biệt và sự kiện hấp dẫn từ Khách sạn ABC.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Bài viết 1 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="../assets/blog-post-1.jpg" alt="Tiêu đề bài viết 1" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-500">Ngày 15 tháng 11, 2023</span>
          <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-3">Khám phá ẩm thực mùa đông tại nhà hàng của chúng tôi</h2>
          <p class="text-gray-600 mb-4 line-clamp-3">
            Mùa đông này, hãy đến và trải nghiệm thực đơn đặc biệt với các món ăn ấm cúng, đậm đà hương vị truyền thống và hiện đại...
          </p>
          <a href="#" class="text-orange-500 hover:text-orange-600 font-semibold flex items-center">
            Đọc thêm <i class="fas fa-arrow-right ml-2 text-sm"></i>
          </a>
        </div>
      </div>

      <!-- Bài viết 2 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="../assets/blog-post-2.jpg" alt="Tiêu đề bài viết 2" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-500">Ngày 10 tháng 11, 2023</span>
          <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-3">Ưu đãi đặc biệt cho kỳ nghỉ lễ sắp tới</h2>
          <p class="text-gray-600 mb-4 line-clamp-3">
            Đừng bỏ lỡ cơ hội tận hưởng kỳ nghỉ lễ tuyệt vời với các gói ưu đãi hấp dẫn dành cho gia đình và cặp đôi...
          </p>
          <a href="#" class="text-orange-500 hover:text-orange-600 font-semibold flex items-center">
            Đọc thêm <i class="fas fa-arrow-right ml-2 text-sm"></i>
          </a>
        </div>
      </div>

      <!-- Bài viết 3 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src="../assets/blog-post-3.jpg" alt="Tiêu đề bài viết 3" class="w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-sm text-gray-500">Ngày 05 tháng 11, 2023</span>
          <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-3">Khách sạn ABC vinh dự nhận giải thưởng "Khách sạn tốt nhất năm"</h2>
          <p class="text-gray-600 mb-4 line-clamp-3">
            Chúng tôi rất vinh dự thông báo Khách sạn ABC đã được trao giải thưởng danh giá "Khách sạn tốt nhất năm" tại lễ trao giải quốc gia...
          </p>
          <a href="#" class="text-orange-500 hover:text-orange-600 font-semibold flex items-center">
            Đọc thêm <i class="fas fa-arrow-right ml-2 text-sm"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Nút xem tất cả bài viết -->
    <div class="text-center mt-16">
      <router-link to="/tin-tuc-full" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
        Xem tất cả bài viết
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
};
</script>

<style scoped>

</style>