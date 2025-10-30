<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <div>
        <p class="text-sm uppercase text-gray-500 font-medium">TIN TỨC & BLOG</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Trải nghiệm tuyệt vời</h2>
      </div>
      <div class="hidden md:flex space-x-2">
        <button @click="scrollLeft" class="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 focus:outline-none">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button @click="scrollRight" class="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 focus:outline-none">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>

    <div
      ref="scrollContainer"
      class="flex overflow-x-scroll no-scrollbar space-x-6 pb-4 -mx-4 px-4 snap-x snap-mandatory"
    >
      <div v-for="post in blogPosts" :key="post.id" class="flex-shrink-0 w-80 md:w-96 snap-start">
        <BlogCard :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from '../ui/BlogCard.vue';

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          image: 'https://picsum.photos/seed/pool/400/300',
          category: 'Travel',
          comments: 0,
          title: 'Nature holiday quote...',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          link: '#',
        },
        {
          id: 2,
          image: 'https://picsum.photos/seed/beach/400/300',
          category: 'Travel',
          comments: 0,
          title: 'How To Travel With...',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          link: '#',
        },
        {
          id: 3,
          image: 'https://picsum.photos/seed/train/400/300',
          category: 'Travel',
          comments: 0,
          title: 'Pack wisely before...',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          link: '#',
        },
        {
          id: 4,
          image: 'https://picsum.photos/seed/city/400/300',
          category: 'Travel',
          comments: 0,
          title: 'How to booking roo...',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          link: '#',
        },
        {
          id: 5,
          image: 'https://picsum.photos/seed/mountain/400/300',
          category: 'Travel',
          comments: 0,
          title: 'Mountain adventure',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          link: '#',
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.scrollContainer.scrollBy({
        left: -320, // Tùy chỉnh giá trị này cho khoảng cách cuộn
        behavior: 'smooth',
      });
    },
    scrollRight() {
      this.$refs.scrollContainer.scrollBy({
        left: 320, // Tùy chỉnh giá trị này cho khoảng cách cuộn
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
/* Ẩn thanh cuộn nhưng vẫn cho phép cuộn */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>