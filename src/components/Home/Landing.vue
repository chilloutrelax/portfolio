<template>
  <div class="landing">
    <div class="first-section vh95 container-fluid">
      <div class="hero">
        <div class="hero-space col-8"></div>

        <div class="hero-image col-4">
          <div class="image-wrapper">
            <!-- <img
              class="animate__animated animate__backInRight animate__delay-1s image-1"
              src=""
              alt=""
            /> -->
          </div>
        </div>

        <div class="welcome-text">
          <h1 class="animate__animated animate__backInLeft animate__delay-1s">
            Riko Murutalu
          </h1>
          <h2 class="animate__animated animate__backInLeft animate__delay-1s">
            Web development enthusiast
          </h2>
        </div>
      </div>

      <span
        class="hero-icon animate__animated animate__bounceIn animate__delay-2s"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          /></svg
      ></span>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

.landing {
  // background-color: #352d39;
  background-color: white;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg fill-opacity='0.34'%3E%3Cpolygon fill='%233b3240' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%233b3240' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
  // overflow-x: hidden;
}

.first-section {
  padding: 0 !important;
  .hero {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);

    .hero-space {
      background: $color1;
    }

    .welcome-text {
      /*background-color: white;*/
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10%;
      width: 60%;
      height: 30%;
      background: $color2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0px 40px;

      h1 {
        font-family: $font2;
        font-weight: 400;
        font-size: 60px;
        color: $color1;
        text-shadow: 0.4px 0px 0.2px grey;
      }
      h2 {
        font-family: $font2;
        font-weight: 200;
        color: $color3;
        font-size: 25px;
      }
    }
  }

  .hero-image {
    background: $color4;
  }

  .hero-icon {
    svg {
      z-index: 21;
      width: 40px;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      color: $color1;
      animation: 1s linear arrow-bounce;
      animation-iteration-count: infinite;

      &:hover {
        color: $color2;
        transition: 2s ease;
      }
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
}
</style>
