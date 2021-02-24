import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About.vue';
import Home from '../components/Home.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
