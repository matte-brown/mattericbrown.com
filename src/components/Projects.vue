<template>
<div>
  <div class="projects-wrapper">
    <h3 v-scroll-reveal.reset="{delay: 60}"><span class="here" id="projects">Here </span>are a few of my projects</h3>
    <div class="project-ml-stack visible" v-if="one">
    <img v-scroll-reveal.reset="{delay: 80}" class="laptop-right" src="../assets/music-lovers-laptop.png" alt="laptop screenshot">
    <img v-scroll-reveal.reset="{delay: 100}" class="phone-right" src="../assets/music-lovers-phone-smaller.jpg" alt="phone screenshot">
    <img v-scroll-reveal.reset="{delay: 120}" class="tech rails" src="../assets/rails.png" alt="rails logo">
    <img v-scroll-reveal.reset="{delay: 140}" class="tech ruby" src="../assets/ruby.png" alt="ruby logo">
    <img v-scroll-reveal.reset="{delay: 160}" class="tech sql" src="../assets/postgresql.png" alt="postgres logo">
    <img v-scroll-reveal.reset="{delay: 180}" class="tech material" src="../assets/materialize.png" alt="materialize logo">
    </div>
    <div class="project-elm-stack " v-if="two">
    <img v-scroll-reveal.reset="{delay: 80}" class="laptop-right" src="../assets/elm-laptop.png" alt="laptop screenshot">
    <img v-scroll-reveal.reset="{delay: 100}" class="phone-right" src="../assets/elm-phone.jpg" alt="phone screenshot">
    <img v-scroll-reveal.reset="{delay: 120}" class="tech react" src="../assets/react.png" alt="rails logo">
    <img v-scroll-reveal.reset="{delay: 140}" class="tech bs" src="../assets/bootstrap.png" alt="ruby logo">
    <img v-scroll-reveal.reset="{delay: 160}" class="tech js" src="../assets/js.png" alt="postgres logo">
    <img v-scroll-reveal.reset="{delay: 180}" class="tech net" src="../assets/netlify.png" alt="ruby logo">
    </div>
    <div class="project-coffee-stack " v-if="three">
    <img v-scroll-reveal.reset="{delay: 80}" class="laptop-right" src="../assets/coffee.png" alt="laptop screenshot">
    <img v-scroll-reveal.reset="{delay: 100}" class="phone-right" src="../assets/coffee-phone.jpg" alt="phone screenshot">
    <img v-scroll-reveal.reset="{delay: 120}" class="tech rails" src="../assets/rails.png" alt="rails logo">
    <img v-scroll-reveal.reset="{delay: 140}" class="tech ruby" src="../assets/ruby.png" alt="ruby logo">
    <img v-scroll-reveal.reset="{delay: 160}" class="tech sql" src="../assets/postgresql.png" alt="postgres logo">
    <img v-scroll-reveal.reset="{delay: 180}" class="tech material" src="../assets/materialize.png" alt="materialize logo">
    </div>
    <div class="links">
    <a class="project-link" v-scroll-reveal.reset="{delay: 60}" v-bind:href="currentLink" target="_blank">Site</a>
    <a class="project-link" v-scroll-reveal.reset="{delay: 60}" v-bind:href="'https://github.com/mattericbrown/' + currentProject" target="_blank"><img class="github" src="../assets/github.png" alt="github logo"></a>
    </div>
    <div class="carosel">
      <div class="arrow-left" @click='moveLeft' v-if="!one"><div class='arrow-mask-left'></div></div>
      <div class="button-active grow" id="project-one"></div>
      <div class="button-inactive" id="project-two"></div>
      <div class="button-inactive" id="project-three"></div>
      <div class="arrow-right" @click='moveRight' v-if="!three"><div class='arrow-mask-right'></div></div>
    </div>
  </div>
  <div class="hero-img">
   <img class="large-image" src="../assets/mural.jpg" />
  </div>
  <div class="overlay-project">

  </div>

</div>
</template>

<script>

export default {
  name: 'Projects',
  data() {
            return {
                currentProject: 'music_lovers',
                currentLink: 'https://music-lovers-app.herokuapp.com/',
                one: true,
                two: false,
                three: false
            }
        },
  methods: {
    moveRight:function(){
      let projectOne = document.getElementById('project-one')
      let projectTwo = document.getElementById('project-two')
      let projectThree = document.getElementById('project-three')

      if(this.one) {
        this.one = false;
        this.two = true;
        this.currentLink = 'https://elmspeakers.com/'
        this.currentProject = 'elm'
        projectOne.classList.remove('button-active');
        projectOne.classList.add('shrink');
        projectOne.classList.add('button-inactive');
        projectTwo.classList.remove('button-inactive');
        projectTwo.classList.remove('shrink');
        projectTwo.classList.add('button-active')
        projectTwo.classList.add('grow')
      }
      else if(this.two) {
        this.two = false;
        this.three = true;
        projectTwo.classList.remove('button-active');
        projectTwo.classList.add('shrink');
        projectTwo.classList.add('button-inactive');
        projectThree.classList.remove('button-inactive');
        projectThree.classList.remove('shrink');
        projectThree.classList.add('button-active')
        projectThree.classList.add('grow')
      }
    },
    moveLeft: function(){
      let projectUno = document.getElementById('project-one')
      let projectDos = document.getElementById('project-two')
      let projectTres = document.getElementById('project-three')

      if(this.two) {
        this.two = false;
        this.one = true;
        projectDos.classList.remove('button-active');
        projectDos.classList.add('shrink');
        projectDos.classList.add('button-inactive');
        projectUno.classList.remove('button-inactive');
        projectUno.classList.remove('shrink');
        projectUno.classList.add('button-active')
        projectUno.classList.add('grow')
      }
      else if(this.three) {
        this.two = true;
        this.three = false;
        projectTres.classList.remove('button-active');
        projectTres.classList.add('shrink');
        projectTres.classList.add('button-inactive');
        projectDos.classList.remove('button-inactive');
        projectDos.classList.remove('shrink');
        projectDos.classList.add('button-active')
        projectDos.classList.add('grow')
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
}

.button-active {
  width:12px;
  height: 12px;
  border-radius: 50%;
  background-color: #443e3c;
  box-shadow: none;
  display: inline-block;
  margin-right: 16px;
  position: relative;
  top: 0px;
}

.button-inactive {
  border-radius: 50%;
  background-color: #443e3c;
  display: inline-block;
  margin-right: 16px;
  width: 12px;
  height: 12px;
}

.carosel {
  position: absolute;
  left: 272px;
  top: 28vw;
}

.arrow-right {
  width: 12px;
  height: 12px;
  background-color: #443e3c;
  position: absolute;
  top: 48%;
  left: 88px;
  transform: translate(-50%, -50%) rotate(45deg);
  &:hover {
    cursor: pointer;
  }
}

.arrow-left {
  width: 12px;
  height: 12px;
  background-color: #443e3c;
  position: absolute;
  top: 48%;
  left: -18px;
  transform: translate(-50%, -50%) rotate(45deg);
  &:hover {
    cursor: pointer;
  }
}

.arrow-mask-right {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  left: -15%;
  top: 15%;
  right: 0;
  bottom: 0%;
}

.arrow-mask-left {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  left: 15%;
  top: -15%;
  right: 0%;
  bottom: 0%;
}

.grow {
  animation: grow .2s cubic-bezier(.73,.01,.96,.24) forwards;
}



@keyframes grow {
  0% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1.5);
  }
}

.shrink {
    animation: shrink .2s cubic-bezier(.73,.01,.96,.24) forwards;
}

@keyframes shrink {
  0% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(0.9);
  }
}

.hidden {
  display: none;
}

.visible {
  display: block;
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
  top: 28vw;
}

.large-image {
  animation: fadeinslow 3.75s cubic-bezier(.73,.01,.96,.24) 0.3s forwards;
  opacity: 0;
  width: 60%;
  height: auto;
  max-width: 1000px;
  position:absolute;
  left: 40%;
  top: 100.7vw;
  margin-right: -7px;
  margin-top: -8px;
}

.overlay-project {
  width: 40vw;
  height: 32vw;
  position: absolute;
  top: 100vw;
  background-color: #fff;
  z-index: 50;
  left: 0;
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

.react {
  height: 48px;
  width: auto;
  left: 10vw;
  top: -16px;
}

.bs {
   height: 40px;
    width: auto;
    left: 12vw;
    top: -16px;
} 

.js {
  height: 48px;
  width: auto;
  left: 14vw;
  top: -16px;
}

.net {
  height: 40px;
  width: auto;
  left: 16vw;
  top: -16px;
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