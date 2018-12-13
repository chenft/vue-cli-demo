import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
// import Hi from '@/components/Hi';
// import Hi1 from '@/components/hi/hi1';
// import Hi2 from '@/components/hi/hi2';
// import demo1 from '@/components/demo1';
// import demo2 from '@/components/demo2';
import Params from '@/components/params';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    // {
    //   path: '/chenft',
    //   name: 'HelloWorld',
    //   components: {
    //     defalut: HelloWorld,
    //     left: demo2,
    //     right: demo1,
    //   },
    // },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
    },
    // {
    //   path: '/hi',
    //   component: Hi,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'HelloWorld/hi',
    //       component: Hi,
    //     },
    //     {
    //       path: 'hi1',
    //       name: 'hi1',
    //       component: Hi1,
    //     },
    //     {
    //       path: 'hi2',
    //       name: 'hi2',
    //       component: Hi2,
    //     },
    //   ],
    // },
  ],
});
