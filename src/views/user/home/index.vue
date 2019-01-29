<template>
    <div class="userHome">
      <div class="lh68 b-orange">
        <div class="w-1200 top">
          <el-row>
            <el-col :span="3">
              <span>我的购购个人中心</span>
            </el-col>
            <el-col :span="2" class="text-center">
              <router-link to="/userHome">
                <span>首页</span>
              </router-link>
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
      <div class="w-1200 padding-t-b-30">
        <div class="margin-b-20">
          <router-link class="navText padding-l-r-35" v-for="(item, index) in orderList" :key="index" :to="currentPage + '/' + item.path">
            {{item.name}}
          </router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      currentPage: '/userHome',
      orderList: [
        {name: '所有订单', path: 'allOrder'},
        {name: '待付款', path: 'waitPay'},
        {name: '待发货', path: 'waitDelivery'},
        {name: '待收货', path: 'waitReceiving'},
        {name: '待评价', path: 'waitEvaluate'}
      ]
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
