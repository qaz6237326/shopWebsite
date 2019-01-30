<template>
  <div class="padding-t-b-15">
    <el-form label-width="80px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="nameOrOrderNumber">
            <el-button slot="append">订单搜索</el-button>
          </el-input>
        </el-col>
        <el-col :span="6" class="lh32">
          <a href="javascript: void(0)" @click="more()">更多筛选条件 ˇ</a>
        </el-col>
      </el-row>
      <el-row class="margin-t-b-20" v-if="moreMap.show">
        <el-form-item label="订单类型">
          <el-input v-model="moreMap.type"></el-input>
        </el-form-item>
        <el-form-item label="成交时间">
          <el-input v-model="moreMap.date"></el-input>
        </el-form-item>
      </el-row>
    </el-form>
    <commodityTable></commodityTable>
  </div>
</template>

<script>
import commodityTable from '../../components/commodityTable/index.vue'
export default {
  name: '',
  components: {
    commodityTable
  },
  data () {
    return {
      nameOrOrderNumber: '',
      moreMap: {
        show: false,
        type: '',
        date: ''
      }
    }
  },
  created () {
  },
  methods: {
    more () {
      this.moreMap.show = !this.moreMap.show
    }
  },
  mounted () {
  }
}
</script>
