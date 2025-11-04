<template>
  <div class="about-page bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-12">Về Khách Sạn Mona</h1>

      <!-- Giới thiệu chung -->
      <div class="bg-white shadow-lg rounded-lg p-6 mb-12 flex flex-col md:flex-row items-center">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Khách sạn Mona" class="w-full md:w-1/2 rounded-lg object-cover mb-6 md:mb-0 md:mr-6 h-96">
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Chào Mừng Đến Với Khách Sạn Mona</h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Khách Sạn Mona tự hào là điểm đến lý tưởng cho những du khách tìm kiếm sự thoải mái, sang trọng và dịch vụ hoàn hảo. Kể từ khi thành lập vào năm 1995, chúng tôi đã không ngừng nỗ lực để mang đến những trải nghiệm đáng nhớ cho mọi khách hàng.
            Với vị trí đắc địa tại trung tâm thành phố, thiết kế kiến trúc độc đáo và đội ngũ nhân viên tận tâm, chúng tôi cam kết sẽ vượt xa mọi mong đợi của bạn.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Chúng tôi tin rằng mỗi chuyến đi là một câu chuyện, và chúng tôi muốn là một phần trong câu chuyện tuyệt vời của bạn. Hãy để Khách Sạn Mona làm cho kỳ nghỉ của bạn trở nên đặc biệt.
          </p>
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full mt-6 focus:outline-none focus:shadow-outline transition duration-300">
            Khám Phá Câu Chuyện Của Chúng Tôi
          </button>
        </div>
      </div>

      <!-- Tầm nhìn & Sứ mệnh -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="text-5xl text-orange-500 mb-4">🌟</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Tầm Nhìn Của Chúng Tôi</h3>
          <p class="text-gray-700 leading-relaxed">
            Trở thành chuỗi khách sạn hàng đầu tại Việt Nam, được công nhận về chất lượng dịch vụ xuất sắc và trải nghiệm khách hàng vượt trội, là lựa chọn hàng đầu cho mọi du khách.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="text-5xl text-orange-500 mb-4">🎯</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Sứ Mệnh Của Chúng Tôi</h3>
          <p class="text-gray-700 leading-relaxed">
            Mang đến sự thoải mái, sang trọng và dịch vụ cá nhân hóa đỉnh cao, tạo ra những khoảnh khắc khó quên và giá trị bền vững cho khách hàng, nhân viên và cộng đồng.
          </p>
        </div>
      </div>

      <!-- Đội ngũ của chúng tôi -->
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Gặp Gỡ Đội Ngũ Của Chúng Tôi</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="CEO" class="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-orange-300">
          <h4 class="text-xl font-semibold text-gray-800">Nguyễn Văn A</h4>
          <p class="text-orange-600">Tổng Giám Đốc</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="General Manager" class="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-orange-300">
          <h4 class="text-xl font-semibold text-gray-800">Trần Thị B</h4>
          <p class="text-orange-600">Quản Lý Khách Sạn</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfc7bb08?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Head of Department" class="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-orange-300">
          <h4 class="text-xl font-semibold text-gray-800">Lê Văn C</h4>
          <p class="text-orange-600">Trưởng Bộ Phận Dịch Vụ</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer Service Manager" class="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-orange-300">
          <h4 class="text-xl font-semibold text-gray-800">Phạm Thị D</h4>
          <p class="text-orange-600">Quản Lý Chăm Sóc Khách Hàng</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>

</style>