<template>
    <div>
      <el-row>
        <el-col :span="6">
          <h1>购购</h1>
        </el-col>
        <el-col :span="6">
          <el-input v-model="query"/>
          <el-button>搜索</el-button>
        </el-col>
        <el-col :span="6">
          <el-button>登录</el-button>
          <el-button>购物车</el-button>
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
