import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../components/page1'
import table1 from '../components/Utils/table_'
import test1 from '../components/Utils/test1'
import Search from '../components/search'
import result from '../components/Utils/box-result'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    },
    {
      path: '/table',
      name: 'page1',
      component: table1
    },
    {
      path: '/result',
      name: 'page1',
      component: result
    },
    {
      name: 'search',
      path: '/search',
      component: Search,
      props: route => ({ query: route.query.q }),
    },
  ]
})
