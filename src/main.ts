import Vue from 'vue'
import uView from "uview-ui";
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'

Vue.use(uView);
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false

const app: Vue = new App()

app.$mount()

