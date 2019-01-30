<template>
    <div class="userHome">
      <div class="lh68 b-orange">
        <div class="w-1200 top">
          <el-row class="font-size18">
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
      <div class="w-1200">
        <div class="" style="border-bottom: 2px solid #ddd;overflow:hidden;zoom:1;">
          <div class="padding20-35" :class="$route.path == (currentPage + '/' + item.path) ? 'active-b' : ''" style="float:left;cursor: pointer;"
               v-for="(item, index) in orderList" :key="index" @click="jump(item.path)">
            {{item.name}}
          </div>
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
    console.log(this.$route.path)
  },
  methods: {
    jump (path) {
      this.$router.push(this.currentPage + '/' + path)
    }
  },
  mounted () {
  }
}
</script>
