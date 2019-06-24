import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { capitalize } from './pipes/capitalize';
import { myplugin } from './myplugin';

Vue.filter('capitalize', capitalize);

Vue.config.productionTip = false

Vue.use(myplugin)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

