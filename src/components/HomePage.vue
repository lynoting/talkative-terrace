<template>
  <div id="observerArea">
    <!-- <a>under construction...</a> -->
    <ul id="e">
      <li class="page-card color-middle e">
        <router-link to="/ash-on-the-scarf">
          <div>Ash on the Scarf</div>
          <div>襟巻きに灰</div>
        </router-link>
      </li>
      <li class="page-card color-strong e">
        <a href="https://lynoting.github.io/playground/">
          <div style="color: #f0f5fc">Neither Baked nor Boiled</div>
          <div style="color: #f0f5fc">煮ても焼いても</div>
        </a>
      </li>
      <li class="page-card color-middle e">
        <router-link to="/apple-is-not-defined">
          <div>Apple is Not Defined</div>
          <div>
            Appleが未定義です
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import "intersection-observer";
// import ScrollReveal from "scrollreveal";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  data() {
    return {
      obs: null,
    };
  },
  methods: {
    showIntersect(changes) {
      changes.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add("show");
          anime({
            targets: change.target,
            translateY: 20,
            duration: 500,
            // scale: 1,
          });
        }
      });
    },
  },
  created() {},
  mounted() {
    const options = {
      // root: document.querySelector("#observerArea"),
      rootMargin: "5px",
      threshold: 0.5,
    };
    this.obs = new IntersectionObserver(this.showIntersect, options);

    const imgs = document.querySelectorAll(".e");
    imgs.forEach((img) => this.obs.observe(img));
  },
};
</script>
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
  padding-top: 0px;
  margin-top: 0px;
  display: block;

  /* width: 100vw;
  height: 100vh; */
  margin: -20px 0;
  background: white;
}
li {
  position: relative;
  width: 100vw;
  height: 300px;
  margin: 0 calc(50% - 50vw);

  /* margin: 0 20px; */
  /* padding-top: 50px; */
  /* text-align: start; */
}
.page-card {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 calc(50% - 50vw);
  display: inline- block;
  text-align: center;
  padding-top: 0px;
}
.color-strong {
  background-color: #2c3e50;
}
.color-weak {
  background-color: #f0f5fc;
}
.color-middle {
  background-color: #c4d2e0;
}

.page-card a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
.content {
  height: 1000px;
}
.e {
  /* width: 350px; */
  display: block;
  opacity: 0;
  /* margin-bottom: 250px; */
}
.e:last-child {
  margin-bottom: 10px;
}
.e.show {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}
</style>
