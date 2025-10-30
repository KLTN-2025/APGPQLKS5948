<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :image="service.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ServiceCard from '../ui/ServiceCard.vue';

const services = ref([
  {
    title: 'Phòng gym',
    description: 'Trang bị đầy đủ các thiết bị hiện đại và chuyên nghiệp, không gian rộng rãi, bạn có thể tập luyện và rèn luyện cơ thể một cách hiệu quả.',
    image: 'https://media.istockphoto.com/id/974165230/fr/photo/int%C3%A9rieur-de-la-salle-de-sport-moderne-avec-vue-sur-la-ville-rendu-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=JbpEYSHyPD2TkkoxiVr5oD4wZgm9nteIUgomWxFaI8w=' // Thay bằng URL ảnh phòng gym của bạn
  },
  {
    title: 'Nhà hàng',
    description: 'Với thực đơn đa dạng từ các món ăn địa phương đến ẩm thực quốc tế, bạn sẽ được thưởng thức các món ăn tươi ngon và hương vị độc đáo.',
    image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' // Thay bằng URL ảnh nhà hàng của bạn
  },
  {
    title: 'Spa',
    description: 'Trong không gian yên tĩnh và thư giãn của spa, bạn có thể tận hưởng các liệu pháp spa tuyệt vời để làm dịu cơ thể và tinh thần.',
    image: 'https://plus.unsplash.com/premium_photo-1723867490491-10519f8ed969?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' // Thay bằng URL ảnh spa của bạn
  },
  {
    title: 'Hồ bơi',
    description: 'Với nước trong xanh và không gian xung quanh thoáng đãng, bạn có thể tắm nắng, tập thể dục hoặc đơn giản là thư giãn trong nước.',
    image: 'https://plus.unsplash.com/premium_photo-1675745329659-29044cb6adbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aCVFMSVCQiU5MyUyMGIlQzYlQTFpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' // Thay bằng URL ảnh hồ bơi của bạn
  }
  // Thêm các dịch vụ khác vào đây nếu có
]);
</script>

<style scoped>
/* Không cần style scoped nhiều với Tailwind */
</style>