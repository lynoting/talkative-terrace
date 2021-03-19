<template>
  <div>
    <a>under construction...</a>
    <ul>
      <li>
        <div class="page-card falling">
          <div class="page-card-square"></div>
          <p>
            <router-link class="page-card" to="/ash-on-the-scarf">
              <div>Ash on the Scarf</div>
              <div>襟巻きに灰</div>
            </router-link>
          </p>
        </div>
      </li>
      <li>
        <div class="page-card falling">
          <div class="page-card-square"></div>
          <p>
            <router-link class="page-card" to="/baked-nor-boiled"
              ><div>Neither Baked nor Boiled</div>
              <div>煮ても焼いても</div>
            </router-link>
          </p>
        </div>
      </li>
      <li>
        <div class="page-card falling">
          <div class="page-card-square"></div>
          <p>
            <router-link class="page-card" to="/apple-is-not-defined"
              ><div>Apple is Not Defined</div>
              <div>
                Appleが未定義です
              </div>
            </router-link>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "HomePage",
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
h1 {
  font-weight: normal;
}
h3 {
  margin: 40px 0 0;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 20px;
  padding-top: 50px;
  text-align: start;
}
.page-card {
  position: relative;
}
.page-card p {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}
.page-card div {
  text-align: center;
}
.page-card-square {
  width: 100%;
  height: 100px;
  background: #c4d2e0;
  /* opacity: 0.1; */
  /* margin: 0 10px; */
  display: inline-block;
  text-align: center;
}
</style>
