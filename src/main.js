import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import router from './router/index';
import axios from 'axios'

axios.defaults.baseURL = 'https://6034fc406496b9001749e083.mockapi.io/api/'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount('#app');
