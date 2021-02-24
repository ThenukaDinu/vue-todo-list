import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import router from './router/index';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount('#app');
