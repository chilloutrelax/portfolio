<template>
  <div class="portfolio container">
    <AboutHeader headerTitle="Portfolio"></AboutHeader>
    <PortfolioSection
      wName="Dengi.ee"
      wDesc1="Project was created as dissertation for my studies. My goal was to develop an monetary resources planning website beta-version. To test the integrity of the website I used black-box method (mainly user-acceptance testing) to see if website is ready for full version release."
      wDesc2="For front-end development I used HTML, SCSS, BootStrap and VueJS. Back-end consisted mainly of Laravel framework and MySQLi database."
      website="http://riko.ee"
    ></PortfolioSection>
    <PortfolioSection
      wName="Kogu me lugu website clone"
      wDesc1="Website was created during an internship in WebExpert OÜ. My task was to create an actual website based of Figma design using HTML, SCSS and JavaScript. Afterwards I had to implement the code into Drupal CMS."
      wDesc2="Internship gave me an opportunity to get a glimpse of an actual work of a front-end developer."
      website="http://riko.host/KML"
    ></PortfolioSection>
    <PortfolioSection
      wName="Landing page nr. 1"
      wDesc1="First landing page I've created. Main focus was to learn working with BootStrap and develop my skills working with CSS. "
      website="http://riko.host/KML"
    ></PortfolioSection>
  </div>
</template>

<script>
import AboutHeader from "@/components/Aboutme/AboutHeader";
import PortfolioSection from "@/components/Portfolio/PortfolioSection.vue";
export default {
  components: {
    AboutHeader,
    PortfolioSection,
  },
};
</script>

<style lang="scss"></style>
