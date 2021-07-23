<template>
  <div class="regions">
    <el-select
      v-model="provinceCode"
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
        <span style="float: left" v-text="allText"></span>
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
  </div>
</template>
<script>
const cn_provinces = require(`static/json/province.json`);
export default {
  name: 'VeProvince',

  model: {
    prop: "province",
    event: "change"
  },

  props: {
    province: {
      type: Object,
      default: () => {
        return {}
      }
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false
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
      provinceCode: this.province.provinceCode,
      provinceName: this.province.provinceName,
    }
  },

  created () {},

  computed: {},
  watch: {},
  methods: {
    /**
     * @description: 处理省选中事件
     * @param {*} code 对应省份Code
     * @return {*}
     * @author: 杜康
     * @Date: 2021-07-21 10:19:27 +0800
     */
    handlerProvince (item) {
      if (item) {
        const nc = item.split("|");
        this.$emit("change", { provinceName: nc[0], provinceCode: nc[1] });
      } else {
        this.$emit("change", {});
      }
    },
  }
};
</script>

<style lang="less">
.regions {
  .el-select + .el-select {
    margin-left: 15px;
  }
}
</style>