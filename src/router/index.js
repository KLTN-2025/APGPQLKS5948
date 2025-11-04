import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RoomsPage from '../views/RoomsPage.vue';
import ContactPage from '../views/ContactPage.vue';
import RoomDetail from '../views/RoomDetail.vue';
import NotFoundPage from '../views/NotFoundPage.vue'; 
import AboutPage from '../views/AboutPage.vue';      
import ServicesPage from '../views/ServicesPage.vue'; 
import BlogPage from '../views/BlogPage.vue';         
import BookingPage from '../views/BookingPage.vue';   


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Trang chủ - Khách sạn ABC'
    }
  },

  {
    path: '/gioi-thieu', 
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'Giới thiệu - Khách sạn ABC'
    }
  },
  {
    path: '/phong',
    name: 'Rooms',
    component: RoomsPage,
    meta: {
      title: 'Phòng của chúng tôi - Khách sạn ABC'
    }
  },
  {
    path: '/phong/:id',
    name: 'RoomDetail',
    component: RoomDetail,
    props: true,
    meta: {
      title: 'Chi tiết phòng - Khách sạn ABC'
    }
  },
  {
    path: '/dich-vu', 
    name: 'Services',
    component: ServicesPage,
    meta: {
      title: 'Dịch vụ - Khách sạn ABC'
    }
  },
  {
    path: '/tin-tuc', 
    name: 'Blog',
    component: BlogPage,
    meta: {
      title: 'Tin tức - Khách sạn ABC'
    }
  },
  {
    path: '/lien-he',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Liên hệ - Khách sạn ABC'
    }
  },
  {
    path: '/dat-phong', 
    name: 'Booking',
    component: BookingPage,
    meta: {
      title: 'Đặt phòng - Khách sạn ABC'
    }
  },
 
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: 'Không tìm thấy trang - Khách sạn ABC'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Khách sạn ABC';
  next();
});

export default router;