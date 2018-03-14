import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import download from '@/components/download'
import HelloWorld from '@/components/HelloWorld'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Loginbf from '@/components/Loginbf'
Vue.use(Router)
var router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('../components/index')
    },
    {
      path: '/download',
      name: 'download',
      component: ()=>import('../components/download')
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginbf',
      name: 'Loginbf',
      component: Loginbf
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
})

export default router;