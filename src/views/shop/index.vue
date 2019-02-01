<template>
    <div class="w-1200">
      <ShopTop></ShopTop>
      <Sign></Sign>
      <Nav></Nav>
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
      imgIconUrl: imIcon
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
