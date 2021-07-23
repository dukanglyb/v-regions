<template>
  <div id="app">
    <el-row>
      <el-col :span="24" class="tc">
        <h1>ElementUI演示案例</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="tc">
        <div class="tc">
          <a href="https://github.com/dukanglyb/v-regions/blob/master/LICENSE">
            <img
              alt="GitHub license"
              src="https://img.shields.io/github/license/dukanglyb/v-regions"
            />
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" label-width="140px">
          <el-form-item label="省">
            <ve-province v-model="province"></ve-province>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(province)}`"></span>
          </el-form-item>

          <el-form-item label="省(全部)">
            <ve-province v-model="allProvince" :is-all="true"></ve-province>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(allProvince)}`"></span>
          </el-form-item>

          <el-form-item label="省市">
            <ve-province-city v-model="provinceCity"></ve-province-city>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(provinceCity)}`"></span>
          </el-form-item>

          <el-form-item label="省市(全部)">
            <ve-province-city v-model="allProvinceCity" :is-all="true"></ve-province-city>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(allProvinceCity)}`"></span>
          </el-form-item>

          <el-form-item label="省市区县">
            <ve-province-city-area v-model="sregion"></ve-province-city-area>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(sregion)}`"></span>
          </el-form-item>

          <el-form-item label="省市区县(全部)">
            <ve-province-city-area v-model="allSregion" :is-all="true"></ve-province-city-area>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(allSregion)}`"></span>
          </el-form-item>

          <el-form-item label="级联省市区县">
            <ve-cascader v-model="cregion"></ve-cascader>
          </el-form-item>
          <el-form-item label="选中值">
            <span v-text="`${JSON.stringify(cregion)}`"></span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      province: {},
      allProvince: {},
      provinceCity: {},
      allProvinceCity: {},
      sregion: {},
      allSregion: {},
      cregion: {}
    };
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
  .tc {
    text-align: center;
  }
  .el-form-item {
    margin: 15px auto;
    width: 60vw;
    text-align: left;
    .el-form-item__label {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
