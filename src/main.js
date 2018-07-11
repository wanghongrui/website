// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BlockUI from 'vue-blockui'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(BlockUI)
Vue.use(VueLazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
