// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import fullscreen  from 'vue-fullscreen'
import ElementUI from 'element-ui';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/bootstrap/bootstrap.min.css'
import 'element-ui/lib/theme-default/index.css';
import InstantSearch from 'vue-instantsearch';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAZt97TFAMPbJkQreQAb9KyRx3Qu7dOcxw",
    libraries: "places" // necessary for places input
  }
});
// import Buefy from 'buefy';
// import 'buefy/lib/buefy.css';


Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(fullscreen );
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(InstantSearch);
// Vue.use(Buefy);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
