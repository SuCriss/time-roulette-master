import Vue from 'vue'
import App from './App.vue'
import Atui from 'at-ui'
import VueI18n from 'vue-i18n'
import i18n from './lang'
import router from './router'
import store from './store'
import '../node_modules/at-ui/src/stylesheet/css/at.css'

Vue.config.productionTip = false;
Vue.use(Atui);
Vue.use(VueI18n,
    {i18n:(key,value)=> i18n.t(key,value)})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
