<template>
  <div id="app">
    <Navbar />
  <div class="h-24"></div>
    <!-- router-view sẽ hiển thị component tương ứng với đường dẫn hiện tại -->
    <router-view />
    <Footer />
    <ScrollToTopButton />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import ScrollToTopButton from './components/common/ScrollToTopButton.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ScrollToTopButton
  }
};
</script>

<style>


body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9fafb; 
}
</style>``