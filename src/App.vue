<template>
  <div id="app">
    <Navbar />
    <Banner />
    <BookingSearch />
    <About />
    <RoomSlider />

    <!-- Thay thế toàn bộ phần "Dịch vụ chuyên nghiệp" và "Tiện ích xung quanh" bằng component mới -->
    <AmenitiesOverview />

    <!-- Phần đánh giá khách hàng -->
    <TestimonialsSection />
    <!-- Kết thúc phần đánh giá khách hàng -->

    <!-- Phần các dịch vụ chất lượng mới -->
    <ServiceSection />
    <!-- Kết thúc phần các dịch vụ chất lượng -->
    <BlogSection />
    <Footer />
    <ScrollToTopButton />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Banner from './components/sections/Banner.vue';
import BookingSearch from './components/sections/BookingSearch.vue';
import AboutSection from './components/sections/AboutSection.vue';
import RoomSlider from './components/sections/RoomSlider.vue';
import TestimonialsSection from './components/sections/TestimonialsSection.vue';
import ServiceSection from './components/sections/ServiceSection.vue';
import AmenitiesSection from './components/sections/AmenitiesSection.vue';
import BlogSection from './components/sections/BlogSection.vue';
import Footer from './components/layout/Footer.vue';
import ScrollToTopButton from './components/common/ScrollToTopButton.vue';

export default {
  components: {
    Navbar,
    Banner,
    BookingSearch,
    AboutSection,
    RoomSlider,
    TestimonialsSection,
    ServiceSection,
    AmenitiesSection,
    BlogSection,
    Footer,
    ScrollToTopButton
  }
};
</script>


<style>
/* Đảm bảo Tailwind CSS được import trong file CSS chính của bạn */

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9fafb; /* Đặt màu nền mặc định cho body */
}
</style>