<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  background: rgb(255, 255, 255);
}
</style>
