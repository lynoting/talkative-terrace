<template>
  <div id="app">
    <header class="header">
      <div>
        <router-link class="layout-title" to="/" style="display: inline-block"
          >s.kawano: writings & visuals</router-link
        >
      </div>
      <div>
        <router-link
          class="layout-title"
          to="/menu"
          style="display: inline-block"
          >=</router-link
        >
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: serif, YuMincho, "Yu Mincho";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
h1,
h2,
h3 {
  font-weight: normal;
}
a:link,
a:visited,
a:hover,
a:active {
  color: #2c3e50;
  text-decoration: none;
}
.header {
  width: 100vw - calc(50% - 50vw);
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  margin: 0 calc(50% - 50vw);
  background-color: #f0f5fc;
  display: flex;
  justify-content: space-between;
}
.header div {
  display: inline-block;
}
.header a {
  margin-left: 2px;
  margin-right: 2px;
}
html {
  background-color: #f0f5fc;
  max-width: 400px;
  margin: 0 auto;
}
</style>
