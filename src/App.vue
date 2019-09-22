<template>
  <div id="app">
    <SideBar/>
    <HeroImg/>
    <About />
    <Projects />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import HeroImg from './components/HeroImg.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    HeroImg,
    About,
    Projects
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
