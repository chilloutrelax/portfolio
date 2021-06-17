<template>
  <div class="about-header">
    <div class="about-title">
      <h1><span class="line-header"></span>{{ headerTitle }}</h1>
      <h2>{{ headerSub }}</h2>
    </div>

    <span class="line-below"></span>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: String,
    headerSub: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.about-header {
  position: relative;
  height: 200px;
  font-weight: 200;
  font-weight: 200;
  letter-spacing: 0.2em;

  .about-title {
    position: relative;
    padding: 50px;
    text-align: center;
    width: 30%;
    margin: 0 auto;

    .line-header {
      position: absolute;
      top: 81px;
      left: 10%;
      width: 80%;
      height: 19px;
      background: rgba(75, 163, 195, 0.27);
    }

    h1 {
      font-family: $font2;
      font-style: normal;
      font-weight: 200;
      font-size: 45px;
      line-height: 75px;
      letter-spacing: 0.2em;
    }
    h2 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      display: flex;
      align-items: center;
      letter-spacing: 0.2em;
    }
  }

  .line-below {
    position: absolute;
    bottom: 50px;
    left: 25%;
    width: 50%;
    height: 2px;
    background: #d6283972;
  }
}
</style>
