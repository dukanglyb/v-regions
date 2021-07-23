<template>
  <el-cascader ref="refCascader" :disabled="disabled" :options="regionOptions" :props="config" v-model="regionCodes"
    @change="handleChange" clearable></el-cascader>
</template>
<script>
const cn_regions = require(`static/json/region.json`);
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
  },

  data () {
    return {
      config: {
        label: "name",
        value: "code"
      },
      regionOptions: cn_regions,
      regionCodes: this.region.codes
    }
  },

  computed: {},
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
