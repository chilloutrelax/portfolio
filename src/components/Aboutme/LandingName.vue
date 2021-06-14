<template>
  <div class="landing-name">
    <div class="welcome-name">
      <div class="shadow-rect">
        <span class="line"></span>
      </div>
      <div class="landing-rect">
        <h1>Riko Murutalu</h1>
        <h2>Front-end developer</h2>
        <span class="line"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

.landing-name {
  position: absolute;
  left: 0%;
  top: 25%;
  transform: rotate(7deg);

  .shadow-rect {
    position: absolute;
    height: 130px;
    width: 1200px;
    top: -5px;
    left: -10px;
    background: rgba(160, 160, 160, 0.274);
    z-index: 0;
    .line {
      position: absolute;
      width: 900px;
      height: 0px;
      left: -10px;
      top: -10px;
      border-top: 2px solid rgba(23, 86, 118, 0.5);
    }
  }
  .landing-rect {
    position: absolute;
    height: 130px;
    width: 1200px;
    background: white;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 3;
    font-family: $font2;

    h1 {
      position: absolute;
      left: 25.75%;
      top: 15%;

      font-weight: 300;
      font-size: 50px;
      font-style: normal;
      color: #175676;
      letter-spacing: 0.05em;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 25.75%;
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 23px;
      line-height: 35px;
      color: #ba324f;
      letter-spacing: 0.05em;
    }

    .line {
      position: absolute;
      width: 1200px;
      height: 0px;
      bottom: -15px;
      border-top: 2px solid rgba(23, 86, 118, 0.5);
    }
  }
}
</style>
