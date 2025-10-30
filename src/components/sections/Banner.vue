<template>
  <div class="relative h-screen bg-cover bg-center" :style="{ backgroundImage: `url('${bannerImage}')` }">
    <div class="absolute inset-0 bg-opacity-10 flex flex-col justify-center items-center text-center px-4">
      <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        Hòa mình vào thiên đường nghỉ dưỡng khách sạn sang trọng
      </h1>
      <p class="text-white text-lg md:text-xl mb-8">
        Nơi mang đến trải nghiệm sang trọng và đẳng cấp
      </p>
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
        KHÁM PHÁ NGAY
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const bannerImage = 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'; 
    
    return {
      bannerImage,
    };
  },
};
</script>

<style scoped>

</style>