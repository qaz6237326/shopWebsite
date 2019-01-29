<template>
    <div class="userHome">
      <div class="lh68 b-orange">
        <div class="w-1200 top">
          <el-row>
            <el-col :span="3">
              <span>我的购购个人中心</span>
            </el-col>
            <el-col :span="2" class="text-center">
              <span>首页</span>
            </el-col>
            <el-col :span="2" class="text-center">
              <span>账户设置</span>
            </el-col>
            <el-col :span="2" class="text-center">
              <span>消息</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="w-1200">
        <div>
          <router-link to="/userHome/allOrder">所有订单</router-link>
          <router-link to="/userHome/waitPay">待付款</router-link>
          <router-link to="/userHome/waitDelivery">待发货</router-link>
          <router-link to="/userHome/waitReceiving">待收货</router-link>
          <router-link to="/userHome/waitEvaluate">待评价</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
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
