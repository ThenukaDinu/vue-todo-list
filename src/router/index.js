import Vue from 'vue';
import VueRouter from 'vue-router';
import Aboutpage from '@/components/Aboutpage.vue';
import Homepage from '@/components/Homepage.vue';
import Contactpage from '@/components/Contactpage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/about',
      name: 'About',
      component: Aboutpage,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contactpage,
    },
  ],
});
