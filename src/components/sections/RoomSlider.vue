<!-- components/RoomSlider.vue -->
<template>
  <div class="bg-[#1a1c29] text-white py-16 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2">PHÒNG TỐT CHO NGHỈ DƯỠNG</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">Phòng nghỉ đẳng cấp</h2>
      </div>

      <!-- Slider Container -->
      <div 
        ref="sliderContainer" 
        class="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 sm:mx-0 lg:mx-auto relative scroll-smooth"
      >
        <!-- Room Card Loop -->
        <div 
          v-for="(room, index) in rooms" 
          :key="room.id" 
          :data-room-index="index"
          class="flex-none w-80 md:w-96 snap-start px-4"
        >
          <div class="bg-[#2a2c39] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img :src="room.imageUrl" :alt="room.name" class="w-full h-48 object-cover">
            <div class="p-5">
              <div class="flex justify-between items-baseline mb-3">
                <h3 class="text-xl font-semibold text-white">{{ room.name }}</h3>
                <span class="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {{ room.price }}₫ /ngày
                </span>
              </div>
              <div class="flex items-center text-gray-400 text-sm mb-4">
                <span class="flex items-center mr-4">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2h-3v5L9 3V2a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h5a1 1 0 001-1v-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2a1 1 0 001 1h5a1 1 0 001-1zM9 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                  {{ room.guests }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.25 7.75h-16.5A.75.75 0 003 8.5v7.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75zM20.25 7.75c0-1.105-.895-2-2-2H5.75c-1.105 0-2 .895-2 2m16.5 0V6a2 2 0 00-2-2h-3.5"></path></svg>
                  {{ room.area }}
                </span>
              </div>
              <a :href="room.link" class="text-orange-500 hover:text-orange-400 font-semibold flex items-center">
                ĐẶT NGAY
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Dots -->
      <div class="flex justify-center mt-8 space-x-2">
        <button 
          v-for="(room, index) in rooms" 
          :key="index"
          @click="scrollToRoom(index)"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="{ 'bg-orange-500': activeDotIndex === index, 'bg-gray-600 hover:bg-gray-400': activeDotIndex !== index }"
          :aria-label="`Chuyển đến phòng ${room.name}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const rooms = ref([
  {
    id: 1,
    name: "Deluxe Room",
    price: "1.200.000",
    area: "48 m²",
    guests: 2,
    imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVsdXhlJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "#"
  },
  {
    id: 2,
    name: "Standard Room 2",
    price: "1.000.000",
    area: "52 m²",
    guests: 2,
    imageUrl: "https://plus.unsplash.com/premium_photo-1676823553593-ac587b35a018?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN0YW5kYXJkJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "#"
  },
  {
    id: 3,
    name: "Standard Room",
    price: "1.000.000",
    area: "48 m²",
    guests: 2,
    imageUrl: "https://images.unsplash.com/photo-1718851972754-6638b49b4775?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fFN0YW5kYXJkJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "#"
  },
  {
    id: 4,
    name: "Single Room 2",
    price: "800.000",
    area: "36 m²",
    guests: 1,
    imageUrl: "https://plus.unsplash.com/premium_photo-1676823553593-ac587b35a018?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YW5kYXJkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "#"
  },
  {
    id: 5,
    name: "Single Room",
    price: "800.000",
    area: "30 m²",
    guests: 1,
    imageUrl: "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHN0YW5kYXJkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    link: "#"
  },
]);

const sliderContainer = ref(null);
const activeDotIndex = ref(0);
let observer = null;
let isScrollingProgrammatically = false; // Flag để tránh xung đột giữa Intersection Observer và cuộn thủ công

const scrollToRoom = (index) => {
  if (sliderContainer.value) {
    const cardElements = sliderContainer.value.querySelectorAll('[data-room-index]');
    if (cardElements[index]) {
      isScrollingProgrammatically = true; // Bật cờ
      sliderContainer.value.scrollTo({
        left: cardElements[index].offsetLeft,
        behavior: 'smooth'
      });
      // Đặt activeDotIndex ngay lập tức để phản hồi nhanh hơn với click
      activeDotIndex.value = index; 

      // Tắt cờ sau khi cuộn hoàn tất
      // Có thể dùng một delay nhỏ hoặc lắng nghe sự kiện 'scrollend' (khi được hỗ trợ)
      setTimeout(() => {
        isScrollingProgrammatically = false;
      }, 500); // Khoảng thời gian đủ để cuộn smooth kết thúc (có thể điều chỉnh)
    }
  }
};

const setupIntersectionObserver = () => {
  if (!sliderContainer.value) return;

  observer = new IntersectionObserver((entries) => {
    // Chỉ cập nhật activeDotIndex nếu không phải do cuộn từ nút bấm
    if (isScrollingProgrammatically) return;

    let highestIntersectionRatio = 0;
    let newActiveIndex = activeDotIndex.value; // Giữ index hiện tại nếu không tìm thấy gì mới

    entries.forEach(entry => {
      // Kiểm tra nếu phần tử đang giao cắt và có tỉ lệ lớn hơn
      if (entry.isIntersecting && entry.intersectionRatio > highestIntersectionRatio) {
        highestIntersectionRatio = entry.intersectionRatio;
        // Lấy index từ data attribute
        newActiveIndex = parseInt(entry.target.dataset.roomIndex);
      }
    });

    if (newActiveIndex !== activeDotIndex.value) {
      activeDotIndex.value = newActiveIndex;
    }
  }, {
    root: sliderContainer.value,
    rootMargin: '0px',
    threshold: 0.75 // Thẻ được coi là active nếu 75% của nó hiển thị
  });

  // Quan sát tất cả các thẻ phòng
  sliderContainer.value.querySelectorAll('[data-room-index]').forEach(card => {
    observer.observe(card);
  });
};

onMounted(() => {
  nextTick(() => { // Đảm bảo DOM đã được render
    setupIntersectionObserver();
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect(); // Ngừng quan sát khi component bị unmount
  }
});
</script>

<style scoped>
/* Đảm bảo scroll-snap-align hoạt động tốt với Intersection Observer */
.snap-x.snap-mandatory > * {
  scroll-snap-align: start; 
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* scroll-smooth class được thêm vào template */
</style>