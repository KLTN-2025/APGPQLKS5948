<template>
  <nav class="bg-black bg-opacity-70 fixed w-full z-10 top-0">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <img src="https://cdn.discordapp.com/attachments/1418933749172928563/1431600905190379573/image.png?ex=68fe01bd&is=68fcb03d&hm=6cb07eb17413d5c98b2fad98fb130e700cd9a3140996214d39e2c7ea0a0f0491&" alt="Mona Media Logo" class="h-8 md:h-10">
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

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-black bg-opacity-90 pb-4">
      <a v-for="item in navItems" :key="item.name" :href="item.link" class="block text-white px-4 py-2 hover:bg-gray-800 transition duration-300">
        {{ item.name }}
      </a>
      <div class="px-4 mt-2">
        <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition duration-300">
          ĐẶT PHÒNG NGAY
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

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

    return {
      isMobileMenuOpen,
      navItems,
      toggleMobileMenu,
    };
  },
};
</script>

<style scoped>
</style>