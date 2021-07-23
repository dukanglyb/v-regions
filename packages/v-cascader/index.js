import VeCascader from "./src/main";

/* istanbul ignore next */
VeCascader.install = Vue => {
  Vue.component(VeCascader.name, VeCascader);
};

export default VeCascader;
