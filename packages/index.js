import VeProvince from './v-province/index.js';
import VeProvinceCity from './v-province-city/index.js';
import VeProvinceCityArea from './v-province-city-area/index.js';
import VeCascader from './v-cascader/index.js';


const components = [
	VeProvince,
	VeProvinceCity,
	VeProvinceCityArea,
	VeCascader,
];

// script 标签方式引入
const install = (Vue, opts = {}) => {
	components.forEach(component => {
		Vue.component(component.name, component);
	})
};

// 支持使用标签方式引入
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
};

export default {
	// 总体引入
	install,
	// 支持按需引入
	VeProvince,
	VeProvinceCity,
	VeProvinceCityArea,
	VeCascader,
}