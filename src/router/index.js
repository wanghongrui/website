import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Read from '@/components/Read'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
