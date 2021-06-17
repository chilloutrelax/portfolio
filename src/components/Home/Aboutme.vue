<template>
  <div id="aboutme" class="about-section">
    <AboutHeader headerTitle="About me"></AboutHeader>
    <AboutSkills></AboutSkills>
    <AboutCV></AboutCV>
    <AboutContact></AboutContact>
  </div>
</template>

<script>
import AboutHeader from "@/components/Aboutme/AboutHeader.vue";
import AboutSkills from "@/components/Aboutme/AboutSkills.vue";
import AboutContact from "@/components/Aboutme/AboutContact.vue";
import AboutCV from "@/components/Aboutme/AboutCV.vue";

export default {
  components: {
    AboutHeader,
    AboutSkills,
    AboutContact,
    AboutCV,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
.about-section {
  z-index: 20;
  position: relative;
  width: 100%;
  padding-top: 100px;
  height: 100vh;

  .col-padder {
    padding: 50px 50px;
  }
}
</style>
