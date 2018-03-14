import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import index from '@/components/index'
import download from '@/components/download'
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
=======
import HelloWorld from '@/components/HelloWorld'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Loginbf from '@/components/Loginbf'

Vue.use(Router)

export default new Router({
	mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
>>>>>>> 045126ac0841b1285ed0f9c8130fe6840aab2c68
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
})

export default router;