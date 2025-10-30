<template>
  <nav class="bg-black bg-opacity-70 fixed w-full z-50 top-0">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <img src="/logo.png" alt="Mona Media Logo" class="h-20 md:h-20">
      </a>

      <!-- Menu Desktop -->
      <div class="hidden md:flex space-x-8">
        <a v-for="item in navItems" :key="item.name" :href="item.link" class="text-white hover:text-orange-400 transition duration-300">
          {{ item.name }}
        </a>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
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

          <!-- Các mục điều hướng -->
          <a v-for="item in navItems" :key="item.name" :href="item.link"
             class="block text-white text-lg font-semibold px-4 py-3 hover:bg-gray-800 transition duration-300 rounded-md">
            {{ item.name }}
          </a>

          <!-- Nút Đặt Phòng Ngay -->
          <div class="px-4 mt-8">
            <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition duration-300">
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

export default {
  setup() {
    const isMobileMenuOpen = ref(false);
    const navItems = [
      { name: 'TRANG CHỦ', link: '#' },
      { name: 'GIỚI THIỆU', link: '#' },
      { name: 'DANH SÁCH PHÒNG', link: '#' },
      { name: 'DỊCH VỤ', link: '#' },
      { name: 'TIN TỨC', link: '#' },
      { name: 'LIÊN HỆ', link: '#' },
    ];

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
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
    };
  },
};
</script>

<style scoped>
/* Optional: Thêm một số transition cơ bản cho Vue transition component nếu bạn muốn*/
/* Tuy nhiên, Tailwind CSS classes đã xử lý hầu hết các transition rồi */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}
</style>