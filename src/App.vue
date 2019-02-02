<template>
  <div id="app" class="b-b8">
    <div class="b-b8">
      <top></top>
    </div>
    <router-view/>
    <div>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import top from './components/top/index.vue'
import foot from './components/foot/index.vue'
export default {
  name: 'App',
  components: {
    top, foot
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
