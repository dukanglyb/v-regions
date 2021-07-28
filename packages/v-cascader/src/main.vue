<template>
  <el-cascader ref="refCascader" :disabled="disabled" :options="options" :props="config" v-model="regionCodes"
    @change="handleChange" clearable></el-cascader>
</template>
<script>
const cn_regions = require(`static/json/region.json`);
import { limitedRegion } from "static/utils";
export default {
  name: 'VeCascader',

  model: {
    prop: "region",
    event: "change"
  },

  props: {
    region: {
      type: Object,
      default: () => {
        return {
          codes: [],
          names: []
        }
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
      config: {
        label: "name",
        value: "code"
      },
      allObj: {
        name: this.allText,
        code: ""
      },
      regionCodes: this.region.codes
    }
  },
  created() {},
  computed: {
    options () {
      return this.isAll ? limitedRegion(cn_regions, this.allObj) : cn_regions;
    }
  },
  watch: {},
  methods: {
    handleChange (codes) {
      if (codes.length) {
        const pathLabels = this.$refs['refCascader'].getCheckedNodes()[0].pathLabels;
        this.$emit('change', { codes, names: pathLabels });
      } else {
        this.$emit('change', { codes: [], names: [] });
      }
    },
  }
};
</script>
