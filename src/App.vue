<template>
  <div id="app">
    <SideBar/>
    <RightContent/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import RightContent from './components/Content.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    RightContent
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #443e3c;
  padding: 0;
}
</style>
