import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Tạo app
const app = createApp(App)

// Gắn router vào app
app.use(router)

// Mount vào #app trong index.html
app.mount('#app')
