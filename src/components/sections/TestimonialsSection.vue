<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h3 class="text-lg font-semibold text-orange-600 uppercase tracking-wider text-center mb-2">ĐÁNH GIÁ CHẤT LƯỢNG</h3>
      <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">Trải nghiệm khách hàng</h2>

      <div class="relative max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Chỉ hiển thị các card đánh giá hiện tại -->
          <TestimonialCard
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index"
            :quote="testimonial.quote"
            :name="testimonial.name"
            :title="testimonial.title"
            :avatar="testimonial.avatar"
            class="transition-all duration-500 ease-in-out"
          />
        </div>

        <!-- Các chấm chỉ báo slider -->
        <div class="flex justify-center space-x-2 mt-8">
          <button
            v-for="(dot, index) in totalPages"
            :key="index"
            @click="currentPage = index"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-300',
              currentPage === index ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
            ]"
            aria-label="Chuyển đến đánh giá"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import TestimonialCard from '../ui/TestimonialCard.vue';

const testimonialsData = ref([
  {
    quote: 'Khách sạn này thực sự là một điểm đến đáng để ghé thăm! Dịch vụ đưa đón từ sân bay rất thuận tiện và nhân viên rất thân thiện. Phòng nghỉ rất sạch sẽ và thoải mái. Hồ bơi tuyệt vời và tôi đã có một bữa sáng ngon lành. Tôi chắc chắn sẽ quay lại!',
    name: 'Xuân Trung', // Tên theo hình ảnh
    title: 'CTO Booking', // Chức danh theo hình ảnh
    avatar: 'https://i.imgur.com/Qj0Y5kL.png' // Avatar của Xuân Trung
  },
  {
    quote: 'Khách sạn này thực sự là một điểm đến đáng để ghé thăm! Dịch vụ đưa đón từ sân bay rất thuận tiện và nhân viên rất thân thiện. Phòng nghỉ rất sạch sẽ và thoải mái. Hồ bơi tuyệt vời và tôi đã có một bữa sáng ngon lành. Tôi chắc chắn sẽ quay lại!',
    name: 'Hào Lê', // Tên theo hình ảnh
    title: 'CEO Themeforest', // Chức danh theo hình ảnh
    avatar: 'https://i.imgur.com/Qj0Y5kL.png' // Thay bằng URL avatar Hào Lê (nếu có ảnh khác)
  },
  {
    quote: 'Khách sạn này thực sự là một điểm đến đáng để ghé thăm! Dịch vụ đưa đón từ sân bay rất thuận tiện và nhân viên rất thân thiện. Phòng nghỉ rất sạch sẽ và thoải mái. Hồ bơi tuyệt vời và tôi đã có một bữa sáng ngon lành. Tôi chắc chắn sẽ quay lại!',
    name: 'Bạch Ngân', // Tên theo hình ảnh
    title: 'CTO Themeforest', // Chức danh theo hình ảnh
    avatar: 'https://i.imgur.com/2Xy1W14.png' // Avatar của Bạch Ngân
  },
  // Nếu có thêm đánh giá, bạn có thể thêm vào đây và chúng sẽ được hiển thị khi chuyển trang
  {
    quote: 'Dịch vụ hoàn hảo! Nhân viên luôn sẵn lòng giúp đỡ với thái độ thân thiện. Phòng rất thoải mái và được dọn dẹp kỹ lưỡng mỗi ngày. Tôi cảm thấy như đang ở nhà. Rất khuyến khích cho bất kỳ ai muốn có một kỳ nghỉ thư giãn.',
    name: 'Mai Hoa',
    title: 'Freelancer',
    avatar: 'https://i.imgur.com/your-fourth-avatar.png' // Thêm ảnh đại diện khác
  },
   {
    quote: 'Đây là một nơi nghỉ dưỡng lý tưởng cho gia đình. Các tiện ích đa dạng, từ hồ bơi đến khu vui chơi trẻ em đều rất tốt. Con tôi rất thích và chúng tôi cũng có những giây phút thoải mái bên nhau. Rất hài lòng về kỳ nghỉ này.',
    name: 'Quang Minh',
    title: 'Manager',
    avatar: 'https://i.imgur.com/your-fifth-avatar.png' // Thêm ảnh đại diện khác
  }
]);

const itemsPerPage = ref(3); // Số lượng đánh giá hiển thị mỗi trang (giữ nguyên 3)
const currentPage = ref(0);  // Trang hiện tại (bắt đầu từ 0)

const totalPages = computed(() => {
  return Math.ceil(testimonialsData.value.length / itemsPerPage.value);
});

const visibleTestimonials = computed(() => {
  const start = currentPage.value * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return testimonialsData.value.slice(start, end);
});

// Chức năng chuyển trang tự động (tùy chọn), bạn có thể bỏ comment nếu muốn
// setInterval(() => {
//   currentPage.value = (currentPage.value + 1) % totalPages.value;
// }, 5000); // Tự động chuyển sau mỗi 5 giây
</script>

<style scoped>
/* Không cần style scoped nhiều với Tailwind */
</style>