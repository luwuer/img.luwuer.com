import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tooltip } from 'element-ui'

import '@public/config.js'
import 'element-ui/packages/theme-chalk/lib/tooltip.css'

Vue.config.productionTip = false
Vue.use(Tooltip)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
