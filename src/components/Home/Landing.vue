<template>
  <div class="landing-area container-fluid">
    <div class="row height-100">
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1200"
        class="col-8 p-0"
      >
        <LandingName
          fullName="Riko Murutalu"
          title="Front-end developer"
        ></LandingName>
      </div>
      <div class="col-4">
        <LandingImg></LandingImg>
      </div>
    </div>

    <BottomArea
      bottomText="About me"
      bottomDesc="Scroll down to know more."
    ></BottomArea>

    <div class="arrow-down animate__animated animate__bounce animate__delay-1s">
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>

<script>
import LandingName from "@/components/Landing/LandingName";
import LandingImg from "@/components/Landing/LandingImg";
import BottomArea from "@/components/Landing/BottomArea";

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
  height: 90vh;
  background: linear-gradient(
    180deg,
    rgba(75, 163, 195, 0.88485) 0%,
    rgba(75, 163, 195, 0.41) 0.01%,
    rgba(232, 193, 197, 0.66) 52.4%,
    #ffecd1 99.99%,
    rgba(204, 230, 244, 0.738667) 100%
  );

  .height-100 {
    padding-top: 10% !important;
    height: 50%;
  }

  .arrow-down {
    position: absolute;
    bottom: 100px;
    font-size: 2rem;
    left: 50%;
    z-index: 99;
    color: #d62839;
    animation: 1s linear arrow-bounce;
    animation-iteration-count: infinite;
  }

  @keyframes arrow-bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
