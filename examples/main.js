import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "normalize.css/normalize.css";
import VeRegions from '@/index';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.use(VeRegions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
