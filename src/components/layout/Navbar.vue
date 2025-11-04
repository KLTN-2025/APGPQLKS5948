<template>
  <nav class="bg-black bg-opacity-70 fixed w-full z-50 top-0">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <img src="/logo.png" alt="Mona Media Logo" class="h-20 md:h-20">
      </router-link>

      <div class="hidden md:flex space-x-8">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="text-white hover:text-orange-400 transition duration-300"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
        <button
          @click="goToBooking"
          class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          ĐẶT PHÒNG NGAY
        </button>
      </div>

      <!-- Burger Icon for Mobile -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay and Sidebar -->
    <transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50">
        <!-- Overlay mờ bên ngoài menu -->
        <div class="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300" @click="toggleMobileMenu"></div>

        <!-- Menu chính (Sidebar) -->
        <div class="fixed top-0 left-0 h-full w-64 bg-black p-4 shadow-lg transform transition-transform duration-300 ease-in-out"
             :class="{ 'translate-x-0': isMobileMenuOpen, '-translate-x-full': !isMobileMenuOpen }">
          <!-- Nút đóng menu -->
          <button @click="toggleMobileMenu" class="absolute top-4 right-4 text-white focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Logo hoặc tiêu đề menu (tùy chọn) -->
          <div class="mb-8 mt-4 text-center">
            <img src="/logo.png" alt="Mona Media Logo" class="h-16 mx-auto">
          </div>

          <router-link
             v-for="item in navItems"
             :key="item.name"
             :to="item.path"
             class="block text-white text-lg font-semibold px-4 py-3 hover:bg-gray-800 transition duration-300 rounded-md"
             @click="closeMobileMenu" 
          >
            {{ item.name }}
          </router-link>

          <!-- Nút Đặt Phòng Ngay - Đã thay đổi thành @click để điều hướng -->
          <div class="px-4 mt-8">
            <button
              @click="goToBooking"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition duration-300"
            >
              ĐẶT PHÒNG NGAY
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'; 

export default {
  setup() {
    const isMobileMenuOpen = ref(false);
    const router = useRouter(); 

    const navItems = [
      { name: 'TRANG CHỦ', path: '/' },
      { name: 'GIỚI THIỆU', path: '/gioi-thieu' }, 
      { name: 'DANH SÁCH PHÒNG', path: '/phong' },
      { name: 'DỊCH VỤ', path: '/dich-vu' }, 
      { name: 'TIN TỨC', path: '/tin-tuc' }, 
      { name: 'LIÊN HỆ', path: '/lien-he' },
    ];

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    // Hàm điều hướng cho nút "ĐẶT PHÒNG NGAY"
    const goToBooking = () => {
      closeMobileMenu(); // Đóng menu mobile nếu đang mở
      router.push('/dat-phong'); // Chuyển đến trang đặt phòng 
    };

    // Để ngăn cuộn trang khi menu mobile mở
    watch(isMobileMenuOpen, (newValue) => {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    return {
      isMobileMenuOpen,
      navItems,
      toggleMobileMenu,
      closeMobileMenu, // Thêm để có thể đóng menu khi click vào link
      goToBooking,     // Thêm hàm điều hướng
    };
  },
};
</script>

<style scoped>

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}
</style>