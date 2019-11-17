<template>
  <div id="app">
    <SideBar/>
    <HeroImg/>
    <About />
    <Projects />
    <Stats :data=loadData />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import HeroImg from './components/HeroImg.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Stats from './components/Stats.vue'
import * as d3 from 'd3'


export default {
  name: 'app',
  components: {
    SideBar,
    HeroImg,
    About,
    Projects,
    Stats
  },
  data() {
    return {
      loadData: {}
    }
  },
  mounted() {
    console.log("app loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./stats.json");
      this.loadData = data;
    }
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
