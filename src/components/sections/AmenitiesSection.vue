<template>
  <section class="container mx-auto px-4 py-8 lg:py-12">
    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">DỊCH VỤ CHUYÊN NGHIỆP</h1>
    <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12 text-center lg:text-left">Tiện ích xung quanh</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Khu vực bản đồ -->
      <div class="col-span-1">
        <MapSection />
      </div>

      <!-- Khu vực tiện ích -->
      <div class="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AmenityCard
          v-for="amenity in amenities"
          :key="amenity.title"
          :title="amenity.title"
          :description="amenity.description"
          :icon="amenity.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import MapSection from './MapSection.vue';
import AmenityCard from '../ui/AmenityCard.vue';

const amenities = ref([
  {
    title: 'Đưa đón',
    description: 'Dịch vụ đưa đón tiện lợi từ sân bay đến khách sạn và ngược lại, đảm bảo bạn có một chuyến đi dễ dàng và thoải mái.',
    icon: 'shuttle'
  },
  {
    title: 'Chỗ đậu xe',
    description: 'Chỗ đậu xe rộng rãi và an ninh, bạn có thể yên tâm về việc đỗ xe trong suốt thời gian lưu trú tại khách sạn.',
    icon: 'parking'
  },
  {
    title: 'Dịch vụ phòng',
    description: 'Làm sạch và dọn dẹp phòng nghỉ của bạn hàng ngày, đảm bảo rằng mọi thứ luôn sạch sẽ và gọn gàng',
    icon: 'roomService'
  },
  {
    title: 'Hồ bơi',
    description: 'Hồ bơi rộng lớn và không gian xung quanh thư giãn, có thể tận hưởng những giờ phút thư giãn.',
    icon: 'pool'
  },
  {
    title: 'Internet',
    description: 'Kết nối internet cáp quang tốc độ cao giúp kết nối mọi mạng một cách nhanh chóng.',
    icon: 'wifi'
  },
  {
    title: 'Bữa ăn sáng',
    description: 'Một khởi đầu ngày mới đầy năng lượng với các món ăn tươi ngon và đặc sản địa phương.',
    icon: 'breakfast'
  }
]);
</script>

<style scoped>
/* Không cần style scoped nhiều với Tailwind */
</style>