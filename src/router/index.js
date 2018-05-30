import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../components/page1'
import table1 from '../components/Utils/table_'
import test1 from '../components/Utils/test1'
import Search from '../components/search'
import result from '../components/Utils/box-result'
import information from '../components/information_tab'
import tabsC from '../components/Utils/tabVue/tabConfig'
import table_info from '../components/Utils/table_information'
import profile from '../components/profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1,
      children:[
        {
          path:'/',
          name:'table',
          component:table1
        },
        {
          path:'information',
          name:'info',
          component:information
        },
        {
          path:'profile',
          name:'info',
          component:profile
        },
        ]
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
    },
    {
      name: 'information',
      path: '/info',
      component: table_info,
    },
    {
      name: 'tab',
      path: '/tab',
      component: tabsC,
    },
    {
      name: 'profile',
      path: '/profile',
      component: profile,
    },
  ]
})
