<template>
  <div>
    <Banner />
    <BookingSearch />
    <AboutSection />
    <RoomSlider />
    <AmenitiesSection />
    <TestimonialsSection />
    <ServiceSection />
    <BlogSection />
  </div>
</template>

<script>

import Banner from '../components/sections/Banner.vue';
import BookingSearch from '../components/sections/BookingSearch.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import RoomSlider from '../components/sections/RoomSlider.vue';
import TestimonialsSection from '../components/sections/TestimonialsSection.vue';
import ServiceSection from '../components/sections/ServiceSection.vue';
import AmenitiesSection from '../components/sections/AmenitiesSection.vue';
import BlogSection from '../components/sections/BlogSection.vue';

export default {
  name: 'HomePage',
  components: {
    Banner,
    BookingSearch,
    AboutSection,
    RoomSlider,
    TestimonialsSection,
    ServiceSection,
    AmenitiesSection,
    BlogSection
  }
};
</script>

<style scoped>

</style>