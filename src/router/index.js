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
import page_404 from '../components/404'
import login_page from '../components/login'
import forgot_pass from '../components/forgot_pass'
import change_pass from '../components/change_pass'
import faq from '../components/FAQ'
import factor1 from '../components/factor1'
import start from '../components/start_page'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/valid',
      name: 'page1',
      component: page1,
      children: [
        {
          path: '/',
          name: 'table',
          component: table1
        },
        {
          path: 'information',
          name: 'info',
          component: information
        },
        {
          path: 'profile',
          name: 'info',
          component: profile
        },
        {
          name: 'change',
          path: '/change',
          component: change_pass,
        },
        {
          name: 'FAQ',
          path: '/faq',
          component: faq,
        },
      ]
    },
    {
      path: '/',
      name: 'start',
      component: start,
      children:[
        {
          path: '/',
          name: 'login',
          component: login_page
        },
        {
          path: '/forget',
          name: 'forget',
          component: forgot_pass
        },
      ]
    },
    {
      path: '/print1',
      name: 'print1',
      component: factor1
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
      name: 'test',
      path: '/test',
      component: test1,
    },
    {
      name: '404',
      path: '/error',
      component: page_404,
    },
    {
      name: 'login',
      path: '/login',
      component: login_page,
      children: [
        {
          name: 'forget',
          path: '/login/forget',
          component: forgot_pass,
        }
      ]
    },
    {
      name: 'factor1',
      path: '/factor1',
      component: factor1,
    }
  ]
})
