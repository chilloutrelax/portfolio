<template>
  <div id="aboutme" class="about-section">
    <AboutHeader headerTitle="About me"></AboutHeader>
    <Aboutme></Aboutme>
    <AboutCV></AboutCV>
    <AboutContact></AboutContact>
  </div>
</template>

<script>
import AboutHeader from "@/components/Aboutme/AboutHeader.vue";
import Aboutme from "@/components/Aboutme/Aboutme.vue";
import AboutContact from "@/components/Aboutme/AboutContact.vue";
import AboutCV from "@/components/Aboutme/AboutCV.vue";

export default {
  components: {
    AboutHeader,
    Aboutme,
    AboutContact,
    AboutCV,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
.about-section {
  z-index: 25;
  position: relative;
  width: 100%;
  padding-top: 50px;
  height: 100vh;

  .col-padder {
    padding: 50px 50px;
  }
}
</style>
