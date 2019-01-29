<template>
  <div id="app" class="min-1200">
    <div class="w-1200">
      <top></top>
    </div>
    <router-view/>
  </div>
</template>

<script>
import top from './components/top.vue'
export default {
  name: 'App',
  components: {
    top
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
