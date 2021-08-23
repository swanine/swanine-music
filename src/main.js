import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import api from './api/index'
import '@/components/Vant'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/styles/base.scss'
import './assets/styles/fontSymbol'
import './assets/styles/font_2728091'

console.log('环境变量=>', process.env)

export const app = createApp(App)
app.use(store).use(router).use(Vant).mount('#app')

app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
