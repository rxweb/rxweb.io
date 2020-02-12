import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
import { ReactiveFormConfig, ClientLibrary } from '@rxweb/reactive-forms';
ReactiveFormConfig.clientLib = ClientLibrary.Vue;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
