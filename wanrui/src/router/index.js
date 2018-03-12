import Vue from 'vue'
import Router from 'vue-router'
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
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
})

export default router;