// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import myHeader from "@/components/myHeader";
import selfPublic from "./public.js";
Vue.config.productionTip = false;
Vue.use(myHeader);
Vue.use(selfPublic);
/* eslint-disable no-new */
var root = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
