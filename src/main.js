import Vue from 'vue';
import App from './App.vue';
import router from './router/index'

import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  Vuesax,
  render: (h) => h(App),
}).$mount('#app');
