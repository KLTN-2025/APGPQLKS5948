<template>
  <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
    <div>
      <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ title }}</h3>
      <p class="text-gray-600 mb-4 text-base">{{ description }}</p>
    </div>
    <div class="flex justify-end mt-4">
      <!-- Sử dụng component icon từ Heroicons trực tiếp -->
      <component :is="iconComponent" class="text-orange-500 w-10 h-10 flex-shrink-0" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, markRaw } from 'vue';

// Import các icon cụ thể từ Heroicons
// Bạn có thể chọn giữa 'outline' (nét mảnh), 'solid' (tô đặc) hoặc 'mini' (miniature)
import {
  TruckIcon, // Ví dụ cho Đưa đón (Shuttle)
  TruckIcon as ParkingIcon, // Đặt lại tên để tránh trùng lặp nếu TruckIcon được dùng cho cả 2 mục đích
  BuildingStorefrontIcon, // Ví dụ cho Dịch vụ phòng (Room Service) - hoặc một icon phù hợp hơn
  SwatchIcon, // Ví dụ cho Hồ bơi (Pool) - hoặc WaterSymbolIcon
  WifiIcon, // Ví dụ cho Internet (Wifi)
  CakeIcon, // Ví dụ cho Bữa ăn sáng (Breakfast) - hoặc CogIcon
} from '@heroicons/vue/24/outline'; // Sử dụng outline icons

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: { // Tên của icon sẽ được truyền vào
    type: String,
    required: true
  }
});

// Ánh xạ chuỗi tên icon với component Heroicons thực tế
const iconComponents = {
  shuttle: markRaw(TruckIcon),
  // Đối với Parking, nếu bạn muốn dùng icon khác, hãy import nó và gán vào đây
  parking: markRaw(ParkingIcon), // Tạm dùng lại TruckIcon hoặc tìm icon phù hợp hơn
  roomService: markRaw(BuildingStorefrontIcon), // Hoặc ClipboardDocumentListIcon, HomeModernIcon
  pool: markRaw(SwatchIcon), // Hoặc WaterSymbolIcon nếu có, hoặc CircleStackIcon
  wifi: markRaw(WifiIcon),
  breakfast: markRaw(CakeIcon), // Hoặc CoffeCupIcon nếu có, hoặc UtensilsCrossedIcon
};

// Chọn component icon tương ứng
const iconComponent = iconComponents[props.icon];

</script>

<style scoped>
/* Không cần style scoped nhiều với Tailwind */
</style>