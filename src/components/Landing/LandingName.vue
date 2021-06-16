<template>
  <div class="landing-name">
    <div class="landing-rect">
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
    transform: rotate(10deg);

    .landing-text {
      font-family: $font2;
      h1 {
        font-size: 3.5vw;
        font-weight: 300;
        color: $color1;
      }
      h2 {
        font-size: 2vw;
        font-weight: 300;
      }
    }
  }
}
</style>
