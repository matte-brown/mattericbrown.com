<template>
  <div class="hero-img" id="about">
   <img src="../assets/mattmural.jpg" />
  </div>
</template>

<script>
export default {
  name: 'HeroImg'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  animation: fadeinslow 2.3s cubic-bezier(.73,.01,.96,.24) 0.9s forwards;
  opacity: 0;
  width: 60%;
  height: auto;
  max-width: 1000px;
  position:absolute;
  left: 40%;
  top: 0;
  margin-right: -7px;
  margin-top: -8px;
}

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
