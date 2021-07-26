# Vue2.x ElementUI2.x 2021最新省市区县三级联动

## 最近更新（2021年6月19日）
数据源已更新为[腾讯位置服务（行政区划）API](https://lbs.qq.com/service/webService/webServiceGuide/webServiceDistrict)，增加了香港、澳门、台湾相关数据~

## 案例和文档（Examples and Documentation）

[v-regions案例和文档](https://dukanglyb.github.io/v-regions/dist/index.html)

## 安装
未安装ElementUI
```
npm install -S element-ui v-regions
```
已安装ElementUI
```
npm install -S v-regions
```

### 引入VeRegions
你可以引入整个VeRegions，或是根据需要仅引入部分组件。我们先介绍如何引入完整的VeRegions。
>完整引入

在main.js中写入一下内容
```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VeRegions from "v-regions";

Vue.use(ElementUI);

Vue.use(VeRegions);
```
以上代码便完成了VeRegions的引入。

> 按需引入
```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { VeProvince, VeProvinceCity, VeProvinceCityArea, VeCascader } from "v-regions";

Vue.use(ElementUI);

Vue.use(VeProvince);
Vue.use(VeProvinceCity);
Vue.use(VeProvinceCityArea);
Vue.use(VeCascader);
```

>省、省市、省市区县联动 不含"全部"

组件支持属性

禁用
| 组件 | 参数 | 类型 | 可选值 | 默认值 |
|:--- | :---: | :---: | :---: | :---: |
|ve-province| Boolean |disabled|true/false|false|
|ve-province-city| Boolean |disabled|true/false|false|
|ve-province-city-area| Boolean |disabled|true/false|false|

是否显示"全部"
| 组件 | 参数 | 类型 | 可选值 | 默认值 |
|:--- | :---: | :---: | :---: | :---: |
|ve-province| Boolean |is-all|true/false|false|
|ve-province-city| Boolean |is-all|true/false|false|
|ve-province-city-area| Boolean |is-all|true/false|false|

可自定义"全部"
| 组件 | 参数 | 类型 | 可选值 | 默认值 |
|:--- | :---: | :---: | :---: | :---: |
|ve-province| String |all-text|--|全部|
|ve-province-city| String |all-text|--|全部|
|ve-province-city-area| String |all-text|--|全部|

尺寸
| 组件 | 参数 | 类型 | 可选值 | 默认值 |
|:--- | :---: | :---: | :---: | :---: |
|ve-province| String |size|medium/small/mini|--|
|ve-province-city| String |size|medium/small/mini|--|
|ve-province-city-area| String |size|medium/small/mini|--|
```
<template>
  <div id="app">
    <ve-province v-model="province"></ve-province>
    <br />
    <ve-province-city v-model="provinceCity"></ve-province-city>
    <br />
    <ve-province-city-area v-model="sregion"></ve-province-city-area>
    <br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      province: {},
      provinceCity: {},
      sregion: {},
    }
  }
}
</script>
```

>级联省市区县三级联动

组件支持属性

禁用
| 组件 | 参数 | 类型 | 可选值 | 默认值 |
|:--- | :---: | :---: | :---: | :---: |
|ve-province| Boolean |disabled|true/false|false|
|ve-province-city| Boolean |disabled|true/false|false|
|ve-province-city-area| Boolean |disabled|true/false|false|

尺寸
| 组件 | 参数 | 类型 | 可选值 | 默认值 |
|:--- | :---: | :---: | :---: | :---: |
|ve-province| String |size|medium/small/mini|--|
|ve-province-city| String |size|medium/small/mini|--|
|ve-province-city-area| String |size|medium/small/mini|--|
```
<template>
  <div id="app">
    <ve-cascader v-model="cregion"></ve-cascader>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cregion: {},
    }
  }
}
</script>
```

### 数据来源
[告花子/2021最新省市区](https://gitee.com/gaohuazi/china_regions).
