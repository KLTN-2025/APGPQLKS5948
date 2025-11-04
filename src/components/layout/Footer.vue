<template>
  <footer class="bg-[#1a1f33] text-gray-300 py-12 relative">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Cột 1: Logo và Giới thiệu -->
      <div class="col-span-1">
        <img src="/logo.png" alt="Mona Media Logo" class="h-30 ">
        <p class="text-sm leading-relaxed">
          We started building our hotel in 1995. Since then, we've grown into the hotel with the best client service in our country
        </p>
      </div>

      <!-- Cột 2: Liên Kết -->
      <div class="col-span-1">
        <h3 class="text-white font-semibold text-lg mb-4">Liên Kết</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-orange-400 transition duration-300">Giới thiệu</a></li>
          <li><a href="#" class="hover:text-orange-400 transition duration-300">Liên hệ</a></li>
          <li><a href="#" class="hover:text-orange-400 transition duration-300">Term & Condition</a></li>
          <li><a href="#" class="hover:text-orange-400 transition duration-300">Help Desk</a></li>
        </ul>
      </div>

      <!-- Cột 3: Địa Chỉ -->
      <div class="col-span-1">
        <h3 class="text-white font-semibold text-lg mb-4">Địa Chỉ</h3>
        <p class="text-sm mb-2">
          1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM.
        </p>
        <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" class="text-orange-400 hover:text-orange-500 transition duration-300 text-sm">
          Xem Google Map
        </a>
      </div>

      <!-- Cột 4: Liên Hệ -->
      <div class="col-span-1">
        <h3 class="text-white font-semibold text-lg mb-4">Liên Hệ</h3>
        <div class="flex items-center mb-2">
          <!-- Phone Icon -->
          <svg class="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span>(+84) 0313-728-397</span>
        </div>
        <div class="flex items-center mb-4">
          <!-- Email Icon -->
          <svg class="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span>info@themomehotel.global.</span>
        </div>

        <!-- Social Media Icons -->
        <div class="flex space-x-3">
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-orange-500 transition duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-orange-500 transition duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.444 19.988c-.689-.258-1.428-.484-2.21-.679-.687-.174-1.393-.263-2.112-.263h-.024c-1.428 0-2.822.42-4.008 1.258a10.088 10.088 0 01-1.637-1.458c-.662-.752-1.17-1.63-.807-2.607.039-.104.058-.207.058-.311 0-.177-.02-.354-.059-.53a8.941 8.941 0 00-.737-1.042c-.22-.294-.486-.566-.782-.816a.417.417 0 00-.51-.081c-.135.064-.265.137-.393.216a.417.417 0 00-.06.758c.245.18.497.35.753.518-.088.352-.132.704-.132 1.056 0 2.112.986 3.968 2.656 5.485.498.455 1.05.856 1.642 1.196.592.341 1.22.616 1.886.819 1.874.57 3.864.516 5.828-.152 2.668-.916 4.778-3.036 5.76-5.748.24-.658.397-1.348.468-2.054.062-.596.082-1.192.059-1.787-.038-.973-.207-1.928-.506-2.853-.265-.823-.623-1.604-1.077-2.33-.243-.377-.514-.732-.809-1.066-.462-.51-.97-.97-1.524-1.378-.554-.408-1.144-.758-1.768-1.05-.624-.291-1.272-.519-1.944-.683-1.678-.403-3.414-.498-5.14-.269-1.727.228-3.376.772-4.832 1.614-.54.31-.95.666-1.23.957-.28.29-.46.544-.54.76a.417.417 0 00.72.334c.15-.17.31-.33.48-.48.22-.2.4-.3.54-.3.14-.01.28-.01.42 0 .54.02.99.16 1.35.43.36.27.57.65.63 1.14.07.5-.02 1-.27 1.5-.25.5-.6.94-1.03 1.34-.44.4-.92.76-1.46 1.07-.54.31-1.12.55-1.74.72-1.66.45-3.37.42-5.06-.09-1.09-.33-2.14-.8-3.1-1.4-.4-.2-.7-.4-.8-.5-.2-.1-.4-.2-.5-.3a.417.417 0 00-.7-.4c.1-.1.2-.2.3-.3.4-.3.9-.6 1.5-.9 1.1-.6 2.3-.9 3.5-.9 1.2-.01 2.3.2 3.4.6 1.1.4 2 .9 2.9 1.6.9.7 1.6 1.5 2.2 2.5.6 1 .9 2.1.9 3.2 0 .6-.1 1.2-.2 1.7-.1.6-.3 1.1-.5 1.6-.2.5-.5.9-.8 1.3-.3.4-.7.8-1.1 1.1-.4.3-.8.6-1.3.8-1.4.6-2.9.8-4.4.6zm-1.146-5.879l-1.334-1.298a.417.417 0 00-.6-.007.417.417 0 00-.007.601l1.638 1.597a.417.417 0 00.601-.007l1.547-1.504a.417.417 0 00-.007-.601.417.417 0 00-.601-.007l-1.334 1.298z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-orange-500 transition duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C8.89 2 6 4.89 6 8.01v4.01c0 3.32 2.68 6 6 6s6-2.68 6-6V8.01c0-3.12-2.89-6.01-6-6.01zM18 12c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3V8.01c0-1.66 1.34-3.01 3-3.01h6c1.65 0 3 1.35 3 3V12zM12 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-7c-1.65 0-3 1.35-3 3v.01c0 1.66 1.34 3 3 3s3-1.34 3-3V5c0-1.65-1.35-3-3-3zM19 12a7 7 0 01-7 7c-1.18 0-2.31-.22-3.35-.64a8 8 0 00-4.07-.93c-1.78-.17-3.56.32-4.9.89L2 19.5c.98.53 2.05.9 3.2.9h15.6c1.16 0 2.22-.37 3.2-.9l.06-.03c-.22-1.33-.82-2.58-1.67-3.69-.85-1.11-1.92-2.02-3.14-2.67z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-orange-500 transition duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M2.002 9.006c0-1.104.896-2.001 2.001-2.001h15.996c1.105 0 2.001.896 2.001 2.001v5.998c0 1.104-.896 2.001-2.001 2.001H4.003a2.002 2.002 0 01-2.001-2.001V9.006zm2.001-1.001a1 1 0 00-1 1v5.998c0 .552.447 1 1 1h15.996c.552 0 1-.448 1-1V9.006c0-.552-.448-1-1-1H4.003zM12 9a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-orange-500 transition duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.027 2.306 7.55 5.617 9.245.41.075.56-.177.56-.395v-1.378c-2.22-.483-2.69-1.07-2.69-1.07-.363-.923-.882-1.168-.882-1.168-.72-.49.055-.48.055-.48.79.056 1.205.815 1.205.815.703 1.205 1.842.857 2.287.654.07-.506.275-.858.503-1.054-1.758-.198-3.605-.879-3.605-3.923 0-.865.309-1.57.815-2.12-.08-.2-.353-1.003.076-2.093 0 0 .664-.213 2.17.81.63-.175 1.305-.262 1.98-.262.675 0 1.35.087 1.98.262 1.506-1.023 2.17-.81 2.17-.81.43 1.09.155 1.893.076 2.093.506.55.815 1.255.815 2.12 0 3.049-1.85 3.722-3.613 3.913.284.246.54.729.54 1.472v2.178c0 .219.148.474.56.395C19.694 19.55 22 16.027 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Đường kẻ ngang -->
    <div class="container mx-auto px-4 border-t border-gray-700 mt-10 pt-6">
      <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; Thiết kế và lập trình bởi <span class="font-bold text-white">MONA.Hotel</span> / Website</p>
        <div class="flex space-x-2 mt-2 md:mt-0">
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return {
      scrollToTop
    };
  }
};
</script>

<style scoped>

</style>