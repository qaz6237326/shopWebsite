<template>
    <div class="w-1200">
      <ShopTop></ShopTop>
      <Sign></Sign>
      <Nav :navListData="navListData"></Nav>
      <div>
        <Commodity></Commodity>
      </div>
    </div>
</template>

<script>
import imIcon from '@/assets/img/im-icon.gif'
import { ShopTop, Sign, Nav, Commodity } from './components/index'
export default {
  name: '',
  components: {
    ShopTop, Sign, Nav, Commodity
  },
  data () {
    return {
      imgIconUrl: imIcon,
      navListData: [
        {text: '首页', value: 0},
        {text: '全部商品', value: 1},
        {text: '男鞋', value: 3},
        {text: '女鞋', value: 4},
        {text: '运动鞋', value: 5},
        {text: '运动男装', value: 6},
        {text: '运动女装', value: 7}
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
