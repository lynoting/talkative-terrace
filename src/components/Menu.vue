<template>
  <div class="menu">
    <header class="layout-header">
      <div>
        <router-link to="/">s.kawano: writings & visuals</router-link>
      </div>
      <div>
        <router-link to="/">×</router-link>
      </div>
    </header>
    <div>
      <ul>
        <li>
          <a href="https://twitter.com/kkhaiya">twitter</a>
        </li>
        <li>
          <a href="https://note.com/lynoting">note</a>
        </li>
        <li>
          <a href="mailto:kawanosakiko@gmail.com">email</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  methods: {
    startRandomizer() {
      anime({
        targets: ".falling",
        // translateX: 250,
        translateY: 50,
        duration: 3000,
      });
      anime({
        targets: ".specific-prop-params",
        translateY: {
          value: 50,
          duration: 800,
        },
        rotate: {
          value: 360,
          duration: 1800,
          easing: "easeInOutSine",
        },
        delay: 250, // All properties except 'scale' inherit 250ms delay
      });
    },
  },
  mounted() {
    this.startRandomizer();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
  padding: 0;
}
.menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: 0 calc(50% - 50vw);
  background-color: #f0f5fc;
  top: 0px;
  left: 0px;
}
.layout-header {
  position: sticky;
  width: 100vw - calc(50% - 50vw);
  margin: 0 calc(50% - 50vw);
  background-color: #f0f5fc;
  display: flex;
  justify-content: space-between;
}
.layout-header div {
  display: inline-block;
}
</style>
