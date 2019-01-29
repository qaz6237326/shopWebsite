<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="5">
          <router-link to="/">
            <span>购购</span>
          </router-link>
        </el-col>
        <el-col :span="8">
          <el-input v-model="query">
            <el-button slot="append">搜索</el-button>
          </el-input>
        </el-col>
        <el-col :span="9">
          <div style="padding-top: 2px;">
            <el-button>登录</el-button>
            <el-button>收藏</el-button>
            <el-button>购物车</el-button>
            <router-link to="/userHome">
              <el-button>个人中心</el-button>
            </router-link>
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
