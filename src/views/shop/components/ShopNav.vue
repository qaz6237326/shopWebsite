<template>
    <div>
      <el-row class="ptb10 b-b8">
        <el-col :span="20">
          <ul class="nav">
            <li v-for="(item, index) in navListData" :key="index">
              <span>{{item.text}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span="4">
          <el-input>
            <el-button slot="append">
              搜索
            </el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
    navListData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
<style lang="scss">
  .nav {
    li {
      cursor: pointer;
      float: left;
      margin: 0 15px;
      span {
        font-size: 18px;
        font-weight: 600;
        // color: #fff;
      }
    }
  }
</style>
