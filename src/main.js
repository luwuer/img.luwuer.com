import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Pagination, Tooltip } from 'element-ui'

import store from './store.js'
import '@public/config.js'

Vue.config.productionTip = false
Vue.use(Pagination)
Vue.use(Tooltip)

new Vue({
  router,
  data: {
    store // 挂载自定store
  },
  render: h => h(App)
}).$mount('#app')
