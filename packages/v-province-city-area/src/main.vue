<template>
  <div class="regions">
    <el-select
      v-model="cprovinces"
      :disabled="disabled"
      :size="size"
      clearable
      placeholder="请选择省"
      @change="handlerProvince"
    >
      <el-option
        v-if="isAll"
        :value="allText"
      >
        <span
          style="float: left"
          v-text="allText"
        ></span>
        <span style="float: right; color: #8492a6; font-size: 13px"></span>
      </el-option>
      <el-option
        v-for="item in provinceOptions"
        :key="item.code"
        :label="item.name"
        :value="`${item.name}|${item.code}`"
      >
        <span
          style="float: left"
          v-text="item.name"
        ></span>
        <span
          style="float: right; color: #8492a6; font-size: 13px"
          v-text="item.code"
        ></span>
      </el-option>
    </el-select>

    <el-select
      v-if="cityOptions.length > 0"
      v-model="ccity"
      :disabled="disabled"
      :size="size"
      clearable
      placeholder="请选择市"
      @change="handlerCity"
    >
      <el-option
        v-if="isAll"
        :value="allText"
      >
        <span
          style="float: left"
          v-text="allText"
        ></span>
        <span style="float: right; color: #8492a6; font-size: 13px"></span>
      </el-option>
      <el-option
        v-for="item in cityOptions"
        :key="item.code"
        :label="item.name"
        :value="`${item.name}|${item.code}`"
      >
        <span
          style="float: left"
          v-text="item.name"
        ></span>
        <span
          style="float: right; color: #8492a6; font-size: 13px"
          v-text="item.code"
        ></span>
      </el-option>
    </el-select>

    <el-select
      v-if="cityOptions.length > 0 && areaOptions.length > 0"
      v-model="carea"
      :disabled="disabled"
      :size="size"
      clearable
      placeholder="请选择区/县"
      @change="handlerArea"
    >
      <el-option
        v-if="isAll"
        :value="allText"
      >
        <span
          style="float: left"
          v-text="allText"
        ></span>
        <span style="float: right; color: #8492a6; font-size: 13px"></span>
      </el-option>
      <el-option
        v-for="item in areaOptions"
        :key="item.code"
        :label="item.name"
        :value="`${item.name}|${item.code}`"
      >
        <span
          style="float: left"
          v-text="item.name"
        ></span>
        <span
          style="float: right; color: #8492a6; font-size: 13px"
          v-text="item.code"
        ></span>
      </el-option>
    </el-select>
  </div>
</template>
<script>
const cn_provinces = require(`static/json/province.json`);
const cn_citys = require(`static/json/city.json`);
const cn_areas = require(`static/json/area.json`);
export default {
  name: 'VeProvinceCityArea',

  model: {
    prop: "provinces",
    event: "change"
  },

  props: {
    provinces: {
      type: Object,
      default: () => {
        return {}
      }
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    allText: {
      type: String,
      default: "全部"
    },
    isAll: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      provinceOptions: cn_provinces,
      cityOptions: [],
      areaOptions: [],
      cprovinces: this.provinces.provinceCode,
      ccity: this.provinces.cityCode,
      carea: this.provinces.areaCode,
      provinceCode: "",
      provinceName: "",
      cityCode: "",
      cityName: "",
      areaCode: "",
      areaName: "",
    }
  },

  computed: {},
  watch: {},
  methods: {
    /**
     * @description: 处理省选中事件
     * @param {*} item 对应省份名称及Code
     * @return {*}
     * @author: 杜康
     * @Date: 2021-07-21 10:19:27 +0800
     */
    handlerProvince (item) {
      if (item && item !== this.allText) {
        const nc = item.split("|");
        this.provinceName = nc[0];
        this.provinceCode = nc[1];
        this.ccity = "";
        this.cityOptions = cn_citys[this.provinceCode];
        this.carea = "";
        this.areaOptions = [];
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
        });
      } else {
        if (item === this.allText) {
          this.cprovinces = item;
        } else {
          this.cprovinces = "";
        }
        this.ccity = "";
        this.carea = "";
        this.areaOptions = [];
        this.cityOptions = [];
        this.$emit("change", item ? { provinceName: item, provinceCode: "" } : {});
      }
    },
    /**
     * @description: 处理地级市选中事件
     * @param {*} item 对应地级市名称及Code
     * @return {*}
     * @author: 杜康
     * @Date: 2021-07-21 10:19:39 +0800
     */
    handlerCity (item) {
      if (item && item !== this.allText) {
        const nc = item.split("|");
        this.cityName = nc[0];
        this.cityCode = nc[1];
        this.carea = "";
        this.areaOptions = cn_areas[this.cityCode];
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
          cityName: this.cityName,
          cityCode: this.cityCode,
        });
      } else {
        if (item === this.allText) {
          this.ccity = item;
        } else {
          this.ccity = "";
        }
        this.cityOptions = cn_citys[this.provinceCode];
        this.carea = "";
        this.areaOptions = [];
        const isEmptyCity = item ? {
          cityName: item,
          cityCode: "",
        } : {}
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
          ...isEmptyCity
        });
      }
    },
    /**
     * @description: 处理区/县选中事件
     * @param {*} item 对应区/县名称及Code
     * @return {*}
     * @author: 杜康
     * @Date: 2021-07-21 10:19:39 +0800
     */
    handlerArea (item) {
      if (item) {
        const nc = item.split("|");
        this.areaName = nc[0];
        this.areaCode = nc[1];
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
          cityName: this.cityName,
          cityCode: this.cityCode,
          areaName: this.areaName,
          areaCode: this.areaCode,
        });
      } else {
        this.carea = "";
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
          cityName: this.cityName,
          cityCode: this.cityCode,
        });
      }
    }
  }
};
</script>
