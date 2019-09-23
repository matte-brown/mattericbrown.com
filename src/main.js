import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueScrollReveal from 'vue-scroll-reveal';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueScrollReveal);
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')
