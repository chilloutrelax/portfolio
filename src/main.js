import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free";

import "./assets/layout.scss";
import "./assets/variables.scss";
import "./assets/bs_overwrite.scss";

import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

AOS.init();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
