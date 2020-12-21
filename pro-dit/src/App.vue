<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer ref="tortillaRef" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eff1db;
  scroll-behavior: smooth;
  min-height: 100vh;
  position: relative;
}

h1 {
  margin: 0;
}
</style>
