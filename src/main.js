import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";
import "@popperjs/core";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BootstrapVue } from "bootstrap-vue";

import "./assets/layout.scss";
import "./assets/variables.scss";
import "./assets/bs_overwrite.scss";

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

AOS.init();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
