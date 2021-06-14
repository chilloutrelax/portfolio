<template>
  <div class="landing-area">
    <div class="container-fluid">
      <div class="col h-landing">
        <LandingName></LandingName>
        <LandingImg></LandingImg>
      </div>
    </div>

    <div class="">
      <BottomArea></BottomArea>
    </div>
  </div>
</template>

<script>
import LandingName from "@/components/Aboutme/LandingName";
import LandingImg from "@/components/Aboutme/LandingImg";
import BottomArea from "@/components/Aboutme/BottomArea";

export default {
  components: {
    LandingName,
    LandingImg,
    BottomArea,
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

  .h-landing {
    height: 600px;
  }
}
</style>
