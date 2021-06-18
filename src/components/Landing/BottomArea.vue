<template>
  <div class="landing-bottom">
    <span class="vertical-white">
      <span class="line-vert"></span>
      <div class="bottom-text">
        <h1><span class="hover"></span>{{ bottomText }}</h1>
        <h2>{{ bottomDesc }}</h2>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "BottomArea",
  props: {
    bottomText: String,
    bottomDesc: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.landing-bottom {
  position: absolute;
  bottom: 100px;
  left: 0;
  width: 100%;

  .vertical-white {
    position: inherit;
    display: flex;
    flex-direction: column;
    justify-content: left;
    transform: rotate(10deg);
    left: -100px;
    width: 100%;
    height: 200px;
    background: white;
    z-index: 0;

    .line-vert {
      position: absolute;
      width: 50%;
      left: 100px;
      height: 0px;
      top: -5px;
      border-top: 2px solid rgba(23, 86, 118, 0.5);
      z-index: 0;
    }

    .bottom-text {
      position: relative;
      padding-left: 10%;
      padding-top: 2%;
      width: 30%;

      h1 {
        width: 100%;
        position: relative;
        padding: 0;
        margin: 0;
        font-weight: 200;
        text-align: center;
        letter-spacing: 0.2em;

        .hover {
          position: absolute;
          top: 22px;
          left: -2px;
          width: 100%;
          height: 16px;
          background: rgba(75, 163, 195, 0.27);
        }
      }

      h2 {
        padding: 0;
        margin: 0;
        font-weight: 200;
        font-size: 1vw;
        text-align: center;
        color: $color1;
      }
    }
  }
}
</style>
