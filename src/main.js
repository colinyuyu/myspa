import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'jquery';
import 'popper.js';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import router from './router'; // 引入路由对象

const app = createApp(App);
app.use(router); // 使用路由对象
app.use(ElementPlus);
app.mount('#app');
