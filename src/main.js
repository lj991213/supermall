import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.scss'
import fastclick from 'fastclick'
/*
fastclick 解决移动端点击延迟问题
*/
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
