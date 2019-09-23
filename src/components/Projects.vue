<template>
<div>
  <div class="projects-wrapper">
    <h3 v-scroll-reveal.reset="{delay: 60}"><span class="here">Here </span>are a few of my projects</h3>
    <img v-scroll-reveal.reset="{delay: 80}" class="laptop-right" src="../assets/music-lovers-laptop.png" alt="laptop screenshot">
    <img v-scroll-reveal.reset="{delay: 100}" class="phone-right" src="../assets/music-lovers-phone-smaller.jpg" alt="laptop screenshot">
    <img v-scroll-reveal.reset="{delay: 120}" class="tech rails" src="../assets/rails.png" alt="rails logo">
    <img v-scroll-reveal.reset="{delay: 140}" class="tech ruby" src="../assets/ruby.png" alt="ruby logo">
    <img v-scroll-reveal.reset="{delay: 160}" class="tech sql" src="../assets/postgresql.png" alt="postgres logo">
    <img v-scroll-reveal.reset="{delay: 180}" class="tech material" src="../assets/materialize.png" alt="materialize logo">
    <div class="links">
    <a class="project-link" v-scroll-reveal.reset="{delay: 60}" href="https://music-lovers-app.herokuapp.com/">Site</a>
    <a class="project-link" v-scroll-reveal.reset="{delay: 60}" href="https://github.com/mattericbrown/music_lovers"><img class="github" src="../assets/github.png" alt="github logo"></a>
    </div>
  </div>
  <div class="hero-img">
   <img class="large-image" src="../assets/mural.jpg" />
  </div>
</div>
</template>

<script>

export default {
  name: 'Projects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
}

.here {
  color: #FFFFFF;
  font-weight: 500;
  font-size: 2rem;
  position: relative;
}
.projects-wrapper {
  position: absolute;
  top: 66vw;
  left: 33.7vw;
}

.laptop-right {
  position: relative;
  width: 30vw;
}

.phone-right {
  position: absolute;
  top: 112px;
  width: 7.81vw;
}

.project-link {
  position: relative;
  display: inline;
  margin-right: 16px;
  color: #443e3c;
}

.github-link {
  position: relative;
  display: inline;
}

.github {
  position: relative;
  top: 4px;
  width: 18px;
  height: auto;
}

.links {
  position: absolute;
  left: 0.7vw;
  top: 27vw;
}

.large-image {
  animation: fadeinslow 3.75s cubic-bezier(.73,.01,.96,.24) 0.3s forwards;
  opacity: 0;
  width: 60%;
  height: auto;
  max-width: 1000px;
  position:absolute;
  left: 40%;
  top: 100.4vw;
  margin-right: -7px;
  margin-top: -8px;
}

.tech {
  position: relative;
}

.rails {
  height: 48px;
  width: auto;
  left: 10vw;
  top: -16px;
}

.ruby {
  height: 40px;
  width: auto;
  left: 12vw;
  top: -16px;
}

.sql {
  height: 56px;
  width: auto;
  left: 14vw;
  top: -8px;
}

.material {
  height: 56px;
  width: auto;
  left: 16vw;
  top: -8px;
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