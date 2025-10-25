<template>
  <div id="app">
    <Navbar />
    <Banner />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Banner,
  },
};
</script>

<style>

body {
  font-family: 'Arial', sans-serif; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>