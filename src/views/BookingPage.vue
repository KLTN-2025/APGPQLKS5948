<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">Đặt phòng của bạn</h1>
    <p class="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
      Hoàn tất biểu mẫu dưới đây để đặt phòng tại Khách sạn ABC. Chúng tôi sẽ liên hệ lại với bạn sớm nhất.
    </p>

    <div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
      <form @submit.prevent="submitBooking">
        <!-- Thông tin liên hệ -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Thông tin liên hệ</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label for="fullName" class="block text-gray-700 text-sm font-bold mb-2">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              v-model="bookingForm.fullName"
              placeholder="Nguyễn Văn A"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              v-model="bookingForm.email"
              placeholder="email@example.com"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Số điện thoại:</label>
            <input
              type="tel"
              id="phone"
              v-model="bookingForm.phone"
              placeholder="09xx-xxx-xxx"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label for="country" class="block text-gray-700 text-sm font-bold mb-2">Quốc gia:</label>
            <input
              type="text"
              id="country"
              v-model="bookingForm.country"
              placeholder="Việt Nam"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        <!-- Thông tin đặt phòng -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Chi tiết đặt phòng</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label for="checkInDate" class="block text-gray-700 text-sm font-bold mb-2">Ngày nhận phòng:</label>
            <input
              type="date"
              id="checkInDate"
              v-model="bookingForm.checkInDate"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label for="checkOutDate" class="block text-gray-700 text-sm font-bold mb-2">Ngày trả phòng:</label>
            <input
              type="date"
              id="checkOutDate"
              v-model="bookingForm.checkOutDate"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label for="roomType" class="block text-gray-700 text-sm font-bold mb-2">Loại phòng:</label>
            <select
              id="roomType"
              v-model="bookingForm.roomType"
              class="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            >
              <option value="">Chọn loại phòng</option>
              <option value="standard">Phòng Tiêu chuẩn</option>
              <option value="deluxe">Phòng Deluxe</option>
              <option value="suite">Suite</option>
              <option value="family">Phòng Gia đình</option>
            </select>
          </div>
          <div>
            <label for="guests" class="block text-gray-700 text-sm font-bold mb-2">Số lượng khách:</label>
            <input
              type="number"
              id="guests"
              v-model.number="bookingForm.guests"
              min="1"
              max="10"
              placeholder="1"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
        </div>

        <!-- Yêu cầu đặc biệt -->
        <div class="mb-8">
          <label for="specialRequests" class="block text-gray-700 text-sm font-bold mb-2">Yêu cầu đặc biệt (tùy chọn):</label>
          <textarea
            id="specialRequests"
            v-model="bookingForm.specialRequests"
            rows="4"
            placeholder="Ví dụ: Giường phụ, phòng có view đẹp, không hút thuốc..."
            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          ></textarea>
        </div>

        <!-- Nút Đặt phòng -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            XÁC NHẬN ĐẶT PHÒNG
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BookingPage',
  setup() {
    const bookingForm = ref({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
      guests: 1,
      specialRequests: ''
    });

    const submitBooking = () => {
      // Ở đây, bạn sẽ gửi dữ liệu đặt phòng đến API backend của mình
      // Ví dụ: axios.post('/api/bookings', bookingForm.value)
      console.log('Dữ liệu đặt phòng đã gửi:', bookingForm.value);

      // Hiển thị thông báo thành công cho người dùng
      alert('Yêu cầu đặt phòng của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.');

      // Reset form sau khi gửi
      bookingForm.value = {
        fullName: '',
        email: '',
        phone: '',
        country: '',
        checkInDate: '',
        checkOutDate: '',
        roomType: '',
        guests: 1,
        specialRequests: ''
      };
    };

    return {
      bookingForm,
      submitBooking
    };
  }
};
</script>

<style scoped>

</style>