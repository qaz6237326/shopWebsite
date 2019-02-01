<template>
    <div class="w-1200">
      <el-row>
        <el-col :span="3">
          <span>VIP购购</span>
        </el-col>
        <el-col :span="3">
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
        </el-col>
        <el-col :span="3">

        </el-col>
        <el-col :span="3">

        </el-col>
        <el-col :span="3">

        </el-col>
      </el-row>
    </div>
</template>

<script>
import imIcon from '@/assets/img/im-icon.gif'
export default {
  name: '',
  data () {
    return {
      imgIconUrl: imIcon
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
