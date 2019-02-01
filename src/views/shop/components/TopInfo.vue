<template>
      <el-row :gutter="5" class="c-t-nav pt10">
        <el-col :span="3">
          <span>VIP购购</span>
        </el-col>
        <el-col :span="3" class="line">
          <div class="ml25">
            <div>
              <span>苏泊尔官方旗舰店</span>
            </div>
            <span class="tag-box" style="background: rgba(244,201,133,1);">
            <span style="transform: scale(0.83)">
              品牌直销
            </span>
          </span>
            <span class="im-icon im-static">
            <a class="shop-icon"></a>
          </span>
          </div>
        </el-col>
        <el-col :span="3" class="line-l line-r">
          <ul class="ul-nav">
            <li>
              <div>描 述</div>
              <div>
                4.8
                <span>↑</span>
                <!--     <span>↓</span>
                     <span> - </span>-->
              </div>
            </li>
            <li>
              <div>服 务</div>
              <div>
                4.8
                <span>↑</span>
                <!--  <span>↓</span>
                  <span> - </span>-->
              </div>
            </li>
            <li>
              <div>物 流</div>
              <div>
                4.8
                <span>↑</span>
                <!--     <span>↓</span>
                     <span> - </span>-->
              </div>
            </li>
          </ul>
        </el-col>
        <el-col :span="3" class="ml25">
          手机逛
        </el-col>
        <el-col :span="3">

        </el-col>
      </el-row>
</template>

<script>
export default {
  name: 'shopTop',
  data () {
    return {}
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
