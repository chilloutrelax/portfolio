<template>
  <div class="landing-bottom container-fluid">
    <div class="bottom-content">
      <span class="vertical-white"></span>
      <div class="about-me-ad">
        <h1>About me</h1>
        <h2>Scroll down to know more.</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-bottom {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  background: white;

  .bottom-content {
    .vertical-white {
      overflow: hidden;
      height: 200px;
      width: 200%;
      background: white;
      top: 0;
      left: -10%;
      position: absolute;
      transform: rotate(9deg);
      z-index: 0;
    }

    .about-me-ad {
      position: absolute;
      z-index: 2;
      top: -50px;
      transform: rotate(9deg);
    }
  }
}
</style>
