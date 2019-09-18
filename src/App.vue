<template>
  <div id="app">
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    SideBar
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "./assets/js/leon.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },
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
