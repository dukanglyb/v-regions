import VeProvince from "./src/main";

/* istanbul ignore next */
VeProvince.install = Vue => {
  Vue.component(VeProvince.name, VeProvince);
};

export default VeProvince;
