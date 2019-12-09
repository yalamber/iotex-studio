import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components";
import "./utils/filter";
import { _ } from "./utils/lodash";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);
Vue.use(ElementUI);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

import contentmenu from "v-contextmenu";
Vue.use(contentmenu);

import VueSplit from "vue-split-panel";
Vue.use(VueSplit);

Vue.prototype.$_ = _;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
