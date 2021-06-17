<template>
  <div class="about-cv d-flex justify-content-center">
    <b-button variant="light" v-b-modal.cv>Click here to open</b-button>

    <b-modal id="cv" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss">
.about-cv {
  padding-top: 30px;

  button {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: 0.1em;
  }
}
</style>
