<template>
  <div class="hero-img">
   <img src="../assets/mattcropped.jpg" />
  </div>
</template>

<script>
export default {
  name: 'RightContent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  animation: fadeinslow 3.75s cubic-bezier(.73,.01,.96,.24) 0.3s forwards;
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
