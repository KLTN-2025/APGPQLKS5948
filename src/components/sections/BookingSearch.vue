<template>
  <div class="relative z-10 -mt-20 md:-mt-16 lg:-mt-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-6 gap-4 items-end">

      <!-- Nhận phòng -->
      <div class="col-span-1 md:col-span-1">
        <label for="checkin" class="block text-gray-700 text-sm font-semibold mb-2">Nhận phòng</label>
        <input type="text" id="checkin" placeholder="dd-mm-yyyy"
               class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
      </div>

      <!-- Trả phòng -->
      <div class="col-span-1 md:col-span-1">
        <label for="checkout" class="block text-gray-700 text-sm font-semibold mb-2">Trả phòng</label>
        <input type="text" id="checkout" placeholder="dd-mm-yyyy"
               class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
      </div>

      <!-- Khách -->
      <div class="col-span-1 md:col-span-1">
        <label for="guests" class="block text-gray-700 text-sm font-semibold mb-2">Khách</label>
        <div class="flex items-center border border-gray-300 rounded-md">
          <button @click="adjustGuests(-1)" class="p-3 text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path></svg>
          </button>
          <span class="flex-grow text-center text-gray-800">{{ guests }} Người</span>
          <button @click="adjustGuests(1)" class="p-3 text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
        </div>
      </div>

      <!-- Loại phòng -->
      <div class="col-span-1 md:col-span-1">
        <label for="room-type" class="block text-gray-700 text-sm font-semibold mb-2">Loại phòng</label>
        <div class="flex items-center border border-gray-300 rounded-md">
          <button @click="adjustRooms(-1)" class="p-3 text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path></svg>
          </button>
          <span class="flex-grow text-center text-gray-800">{{ rooms }}</span>
          <button @click="adjustRooms(1)" class="p-3 text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
        </div>
      </div>

      <!-- Tiện ích -->
      <div class="col-span-1 md:col-span-1">
        <label for="amenities" class="block text-gray-700 text-sm font-semibold mb-2">Tiện ích</label>
        <div class="flex items-center border border-gray-300 rounded-md">
          <button @click="adjustAmenities(-1)" class="p-3 text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path></svg>
          </button>
          <span class="flex-grow text-center text-gray-800">{{ amenities }}</span>
          <button @click="adjustAmenities(1)" class="p-3 text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
        </div>
      </div>

      <!-- Tìm kiếm -->
      <div class="col-span-1 md:col-span-1 flex items-end">
        <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300 flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          Tìm kiếm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const guests = ref(2);
    const rooms = ref(1);
    const amenities = ref(1);

    const adjustGuests = (delta) => {
      guests.value = Math.max(1, guests.value + delta); // Giới hạn tối thiểu là 1 khách
    };

    const adjustRooms = (delta) => {
      rooms.value = Math.max(1, rooms.value + delta); // Giới hạn tối thiểu là 1 phòng
    };

    const adjustAmenities = (delta) => {
      amenities.value = Math.max(0, amenities.value + delta); // Tiện ích có thể là 0
    };

    return {
      guests,
      rooms,
      amenities,
      adjustGuests,
      adjustRooms,
      adjustAmenities,
    };
  },
};
</script>

<style scoped>
/* Không cần thêm CSS tùy chỉnh nhiều nếu đã dùng Tailwind */
</style>