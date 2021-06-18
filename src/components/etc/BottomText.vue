<template>
  <div class="bottom-text">
    <div class="bottom-title">
      <h1>{{ bottomTitle }}</h1>
    </div>

    <span class="line-below"></span>
  </div>
</template>

<script>
export default {
  props: {
    bottomTitle: String,
    bottomSub: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.bottom-text {
  position: relative;
  height: 200px;
  font-weight: 200;
  font-weight: 200;
  letter-spacing: 0.2em;

  .bottom-title {
    position: relative;
    padding: 50px;
    text-align: center;
    width: 100%;
    margin: 0 auto;

    h1 {
      font-family: $font2;
      font-style: normal;
      font-weight: 300;
      font-size: 1.2rem;
    }
  }

  .line-below {
    position: absolute;
    bottom: 100px;
    left: 25%;
    width: 50%;
    height: 2px;
    background: #d6283972;
  }
}
</style>
