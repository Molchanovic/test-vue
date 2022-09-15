<template>
  <home-page />
</template>

<script>
import HomePage from "@/view/HomePage.vue";
export default {
  name: "App",
  components: { HomePage },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #c3faf0;
  color: #2c3e50;
  padding-top: 25px;
}
</style>
