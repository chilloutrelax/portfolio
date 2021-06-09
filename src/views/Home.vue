<template>
  <main>
    <Landing></Landing>
    <Aboutme></Aboutme>
  </main>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Home/Landing";
import Aboutme from "@/components/Home/Aboutme";

export default {
  name: "Home",
  components: {
    Landing,
    Aboutme,
  },
};
</script>

<style lang="scss"></style>
