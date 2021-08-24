import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import api from './api/index'
// eslint-disable-next-line import/no-duplicates
import Vant from 'vant'
// eslint-disable-next-line import/no-duplicates
import { Lazyload } from 'vant'
import 'vant/lib/index.css'
import './assets/styles/base.scss'
import './assets/styles/fontSymbol'
import './assets/styles/font_2728091'
import errorimage from './assets/icon/错误.png'
import loadimage from './assets/icon/加载.png'

console.log('环境变量=>', process.env)

export const app = createApp(App)
app.use(store).use(router).use(Vant).mount('#app')
app.use(Lazyload, {
  error: errorimage,
  loading: loadimage
})
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
