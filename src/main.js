import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueScrollReveal from 'vue-scroll-reveal';
import VueScrollTo from 'vue-scrollto';
import * as d3 from 'd3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faTwitter)
library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueScrollReveal);
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')
