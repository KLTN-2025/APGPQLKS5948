<template>
  <div class="rooms-page bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-12">Khám Phá Các Loại Phòng Của Chúng Tôi</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <RoomCard
          image="https://via.placeholder.com/800x600/F0F8FF/333333?text=Phòng+Tiêu+Chuẩn"
          title="Phòng Tiêu Chuẩn"
          description="Thiết kế hiện đại, đầy đủ tiện nghi cơ bản, phù hợp cho khách công tác hoặc du lịch cá nhân."
          price="Từ 1.200.000 VNĐ/đêm"
          features="1 giường đôi hoặc 2 giường đơn, Wi-Fi miễn phí, TV, minibar, phòng tắm riêng."
          link="/rooms/standard"
        />
        <RoomCard
          image="https://via.placeholder.com/800x600/FFE4E1/333333?text=Phòng+Deluxe"
          title="Phòng Deluxe"
          description="Không gian rộng rãi hơn với tầm nhìn đẹp, mang đến trải nghiệm lưu trú thoải mái và sang trọng."
          price="Từ 1.800.000 VNĐ/đêm"
          features="Giường cỡ lớn, ban công riêng, khu vực tiếp khách, đồ dùng cao cấp, Wi-Fi tốc độ cao."
          link="/rooms/deluxe"
        />
        <RoomCard
          image="https://via.placeholder.com/800x600/ADD8E6/333333?text=Phòng+Suite"
          title="Phòng Suite"
          description="Thiết kế đẳng cấp với phòng khách và phòng ngủ riêng biệt, tối ưu cho sự riêng tư và tiện nghi vượt trội."
          price="Từ 3.500.000 VNĐ/đêm"
          features="Phòng ngủ master, phòng khách riêng, 2 TV, máy pha cà phê, tầm nhìn toàn cảnh thành phố/biển."
          link="/rooms/suite"
        />
        <RoomCard
          image="https://via.placeholder.com/800x600/98FB98/333333?text=Căn+Hộ+Gia+Đình"
          title="Căn Hộ Gia Đình"
          description="Lựa chọn lý tưởng cho gia đình hoặc nhóm bạn, với không gian sống tiện nghi như ở nhà."
          price="Từ 4.000.000 VNĐ/đêm"
          features="2 phòng ngủ, bếp nhỏ, khu vực ăn uống, máy giặt, đầy đủ tiện ích gia đình."
          link="/rooms/family-apartment"
        />
      </div>
      <div class="text-center mt-12">
        <button class="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 text-lg">
          Đặt Phòng Ngay
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RoomCard from '../components/ui/RoomCard.vue';

export default {
  name: 'RoomsPage',
  components: {
    RoomCard,
  },
};
</script>