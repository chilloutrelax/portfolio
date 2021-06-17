<template>
  <div class="landing-name">
    <div class="landing-rect">
      <span class="line-2"></span>
      <span class="shadow-rect">
        <span class="line-1"></span>
      </span>
      <div class="landing-text">
        <h1>{{ fullName }}</h1>
        <h2>{{ title }}</h2>
      </div>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingName",

  props: {
    fullName: String,
    title: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.landing-name {
  position: relative;
  width: 100%;

  .landing-rect {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: -10%;
    width: 100%;
    height: 190px;
    background: white;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 20px 20px 0;
    transform: rotate(12deg);

    .line-2 {
      position: absolute;
      width: 100%;
      right: 0%;
      height: 0px;
      bottom: -15px;
      border-top: 2px solid rgba(23, 86, 118, 0.5);
    }

    .shadow-rect {
      position: absolute;
      top: -7px;
      left: -10px;
      width: 100%;
      height: 190px;
      background: rgba(255, 255, 255, 0.204);
      border-radius: 0 20px 20px 0;
      z-index: 1;

      .line-1 {
        position: absolute;
        width: 100%;
        height: 0px;
        top: -6px;
        left: -18px;
        border-top: 2px solid rgba(23, 86, 118, 0.5);
      }
    }

    .landing-text {
      z-index: 2;
      font-family: $font2;
      h1 {
        font-size: $fsize3;
        font-weight: 300;
        color: $color1;
      }
      h2 {
        font-size: $fsize4;
        font-weight: 300;
        color: $color2;
      }
    }
  }
}
</style>
