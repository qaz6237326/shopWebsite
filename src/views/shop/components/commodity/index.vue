<template>
    <div>
      <el-row>
        <el-col :span="20">
          <el-row>
            <el-col :span="8">
              <div class="pictureArea">
                <pictureArea></pictureArea>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="purchaseBar">
                <purchaseBar></purchaseBar>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="recommend">
                <recommend></recommend>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <rightNav></rightNav>
        </el-col>
      </el-row>

    </div>
</template>

<script>
import pictureArea from './pictureArea.vue'
import purchaseBar from './purchaseBar.vue'
import recommend from './recommend.vue'
import rightNav from './rightNav.vue'
export default {
  name: 'Commodity',
  components: {
    pictureArea, purchaseBar, recommend, rightNav
  },
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

<style lang="scss">
  $w1: 100%;
  $h500: 500px;
  .pictureArea {
    width: $w1;
    height: $h500;
  }
  .purchaseBar {
    width: $w1;
    height: $h500;
  }
  .recommend {
    width: $w1;
    height: 200px;
  }
</style>
