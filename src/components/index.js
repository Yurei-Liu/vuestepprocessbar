// src/components/index.js
import VueStepProcessBar from "./VueStepProcessBar.vue";

VueStepProcessBar.install = function (Vue) {
  Vue.component("vue-step-process-bar", VueStepProcessBar);
};

export default VueStepProcessBar;
