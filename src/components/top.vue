<template>
    <div class="w-1200 padding-t-b-15">
      <el-row :gutter="20">
        <el-col :span="3">
          <router-link to="/">
            <span>购购</span>
          </router-link>
        </el-col>
        <el-col :span="8">
          <el-input v-model="query">
            <el-button slot="append" @click="$router.push('/shop')">搜索</el-button>
          </el-input>
        </el-col>
        <el-col :span="13">
          <div class="top-right-nav">
            <a href="http://localhost:8081">登录</a>
            <el-dropdown>
              <span class="el-dropdown-link" style="font-size: 12px;">
                  我的购购<i class="el-icon-arrow-down el-icon-right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>已买到的宝贝</el-dropdown-item>
                <el-dropdown-item>我的足迹</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <router-link to="/favorites">收藏夹</router-link>
            <router-link to="/shopCar">购物车</router-link>
            <router-link to="/userHome/allOrder">个人中心</router-link>
            <router-link to="/sellerCenter">卖家中心</router-link>
            <router-link to="/customerService">联系客服</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      query: ''
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
