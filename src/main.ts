import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.prototype.$appUrl = 'localhost:8008';

Vue.prototype.$SEND_GRID_API_KEY = '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';
new Vue({
  router,
  store,
  render: h => h(App as any)
}).$mount('#app');
