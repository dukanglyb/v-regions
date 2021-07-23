<template>
  <div class="regions">
    <el-select
      v-model="cprovince"
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
  </div>
</template>
<script>
const cn_provinces = require(`static/json/province.json`);
const cn_citys = require(`static/json/city.json`);
export default {
  name: 'VeProvinceCity',

  model: {
    prop: "provinceCity",
    event: "change"
  },

  props: {
    provinceCity: {
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
      cprovince: this.provinceCity.provinceCode,
      ccity: this.provinceCity.cityCode,
      provinceCode: "",
      provinceName: "",
      cityCode: "",
      cityName: "",
    }
  },

  computed: {},
  watch: {},
  methods: {
    /**
     * @description: 处理省选中事件
     * @param {*} code 对应省份名称及Code
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
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
        });
      } else {
        if (item === this.allText) {
          this.cprovince = item;
        } else {
          this.cprovince = "";
        }
        this.ccity = "";
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
      if (item) {
        const nc = item.split("|");
        this.cityName = nc[0];
        this.cityCode = nc[1];
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
          cityName: this.cityName,
          cityCode: this.cityCode,
        });
      } else {
        this.ccity = "";
        this.$emit("change", {
          provinceName: this.provinceName,
          provinceCode: this.provinceCode,
        });
      }
    }
  }
};
</script>
