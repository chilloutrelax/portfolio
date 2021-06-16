<template>
  <div class="landing-area container-fluid">
    <div class="row height-100">
      <div class="col-8 p-0">
        <LandingName
          fullName="Riko Murutalu"
          title="Front-end developer"
        ></LandingName>
      </div>
      <div class="col-4">
        <LandingImg></LandingImg>
      </div>
    </div>

    <div class="lading-bottom">
      <!-- <BottomArea></BottomArea> -->
    </div>
  </div>
</template>

<script>
import LandingName from "@/components/Landing/LandingName";
import LandingImg from "@/components/Landing/LandingImg";
// import BottomArea from "@/components/Landing/BottomArea";

export default {
  components: {
    LandingName,
    LandingImg,
    // BottomArea,
  },
};
</script>

<style lang="scss">
.landing-area {
  height: 95vh;
  background: linear-gradient(
    180deg,
    rgba(75, 163, 195, 0.88485) 0%,
    rgba(75, 163, 195, 0.41) 0.01%,
    rgba(232, 193, 197, 0.66) 52.4%,
    #ffecd1 99.99%,
    rgba(204, 230, 244, 0.738667) 100%
  );
}

.height-100 {
  padding-top: 200px !important;
}
</style>
