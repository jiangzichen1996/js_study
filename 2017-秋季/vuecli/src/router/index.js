import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import testUrl from '@/components/testUrl'
import count from '@/components/count'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test,
      children: [{
        path: '/test/test1',
        name: 'Test1',
        component: Test1
      },
      {
        path: '/test/test2',
        name: 'Test2',
        component: Test2
      }]
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testUrl/:userName/:userId(\\d+)',
      name: 'testUrl',
      component: testUrl,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);  
        next();      

      }

    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/home2/:userName/:userId(\\d+)',
      redirect: '/testUrl/:userName/:userId(\\d+)'
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/count',
      name: 'count',
      component: count
    }
  ]
})
