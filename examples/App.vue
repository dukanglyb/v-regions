<template>
  <div id="app">
    <div class="region">
      <el-row>
        <el-col :span="24" class="tc">
          <h1>ElementUI演示案例</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="tc hr">
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
      <hr/>
      <el-row>
        <el-col :span="24">
          <el-form ref="form" label-width="160px">
            <el-form-item label="省">
              <ve-province v-model="province"></ve-province>
            </el-form-item>
            <el-form-item label="绑定值">
              <span v-text="`${JSON.stringify({ provinceCode: province.provinceCode }, null, 4)}`"></span>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=4 :value="JSON.stringify(province, null, 4)">
              </el-input>
            </el-form-item>

            <el-form-item label="省(全部)">
              <ve-province v-model="allProvince" :is-all="true"></ve-province>
            </el-form-item>
            <el-form-item label="绑定值">
              <span v-text="`${JSON.stringify({ provinceCode: allProvince.provinceCode }, null, 4)}`"></span>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=4 :value="JSON.stringify(allProvince, null, 4)">
              </el-input>
            </el-form-item>
            <el-form-item label="省市">
              <ve-province-city v-model="provinceCity"></ve-province-city>
            </el-form-item>
            <el-form-item label="绑定值">
              <el-input type="textarea" rows=4 disabled :value="JSON.stringify({ 
                provinceCode: provinceCity.provinceCode, 
                cityCode: provinceCity.cityCode 
              }, null, 4)">
              </el-input>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=6 :value="JSON.stringify(provinceCity, null, 4)">
              </el-input>
            </el-form-item>

            <el-form-item label="省市(全部)">
              <ve-province-city v-model="allProvinceCity" :is-all="true"></ve-province-city>
            </el-form-item>
            <el-form-item label="绑定值">
              <el-input type="textarea" rows=4 disabled :value="JSON.stringify({ 
                provinceCode: allProvinceCity.provinceCode, 
                cityCode: allProvinceCity.cityCode 
              }, null, 4)">
              </el-input>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=6 :value="JSON.stringify(allProvinceCity, null, 4)">
              </el-input>
            </el-form-item>

            <el-form-item label="省市区县">
              <ve-province-city-area v-model="sregion"></ve-province-city-area>
            </el-form-item>
            <el-form-item label="绑定值">
              <el-input type="textarea" rows=5 disabled :value="JSON.stringify({ 
                provinceCode: sregion.provinceCode, 
                cityCode: sregion.cityCode,
                areaCode: sregion.areaCode
              }, null, 4)">
              </el-input>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=8 :value="JSON.stringify(sregion, null, 4)">
              </el-input>
            </el-form-item>

            <el-form-item label="省市区县(全部)">
              <ve-province-city-area v-model="allSregion" :is-all="true"></ve-province-city-area>
            </el-form-item>
            <el-form-item label="绑定值">
              <el-input type="textarea" rows=5 disabled :value="JSON.stringify({ 
                provinceCode: allSregion.provinceCode, 
                cityCode: allSregion.cityCode,
                areaCode: allSregion.areaCode
              }, null, 4)">
              </el-input>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=8 :value="JSON.stringify(allSregion, null, 4)">
              </el-input>
            </el-form-item>

            <el-form-item label="级联省市区县">
              <ve-cascader v-model="cregion"></ve-cascader>
            </el-form-item>
            <el-form-item label="绑定值">
              <span v-text="`${JSON.stringify({ codes: cregion.codes }, null, 4)}`"></span>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=12 :value="JSON.stringify(cregion, null, 4)">
              </el-input>
            </el-form-item>

            <el-form-item label="级联省市区县(全部)">
              <ve-cascader v-model="allCregion" :is-all="true"></ve-cascader>
            </el-form-item>
            <el-form-item label="绑定值">
              <span v-text="`${JSON.stringify({ codes: allCregion.codes }, null, 4)}`"></span>
            </el-form-item>
            <el-form-item label="选中结果">
              <el-input type="textarea" rows=12 :value="JSON.stringify(allCregion, null, 4)">
              </el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
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
      cregion: {},
      allCregion: {}
    };
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .tc {
    text-align: center;
  }
}
.region {
  width: 790px;
  textarea {
    resize: none;
  }
}
</style>
