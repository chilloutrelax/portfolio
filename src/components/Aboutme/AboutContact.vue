<template>
  <div class="about-contact">
    <router-link to="/contact">
      <AboutHeader
        headerTitle="Contact me"
        headerSub="for further information"
      ></AboutHeader>
    </router-link>
  </div>
</template>

<script>
import AboutHeader from "./AboutHeader.vue";

export default {
  components: {
    AboutHeader,
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #000 !important;

  :hover {
    color: #422629ba;
    text-transform: bold !important;
  }
}
</style>
