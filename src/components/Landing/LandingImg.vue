<template>
  <div class="landing-image">
    <div class="picture-container">
      <img src="@/assets/dummypic.png" alt="" />
      <span class="triangle"></span>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

.landing-image {
  width: 100%;
  .picture-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;

    img {
      position: relative;
      top: 40px;
      left: 0;
      z-index: 3;
      width: 17vw;
      height: 17vw;
    }

    .triangle {
      position: absolute;
      transform: rotate(0deg);
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0vw 4vw 22vw 20vw;
      border-color: transparent transparent #363537 transparent;
      z-index: 0;
    }
  }
}
</style>
