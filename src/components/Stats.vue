<template>
  <div class="chart" id="">
    <h1>D3 Chart</h1>
    <h2>{{ msg }}</h2>
    <svg 
      :height='height'
      :width='width'
    ></svg>
  </div>
</template>

<script>

import * as d3 from 'd3'

export default {
  name: 'Stats',
  props: ['statsData'],
  data() {
    return {
      msg: "",
      height: 600,
      width: 600
    };
  },
  created() {
    this.colourScale = d3
      .scaleOrdinal()
      .range(["#5EAFC6", "#FE9922", "#93c464", "#75739F"]);
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes fadeinslow {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
</style>
