<template>
  <div class="portfolio-section" data-aos="fade-up-right">
    <div class="row">
      <div class="col-7 porfolio-image">
        <img src="@/assets/sites/KML.png" alt="" />
      </div>
      <div class="col-5 porfolio-description">
        <h2>{{ wName }}</h2>
        <p>
          {{ wDesc1 }}
        </p>
        <p>
          {{ wDesc2 }}
        </p>

        <div class="buttons">
          <div class="col-6">
            <a href=""
              ><button class="btn btn-light" variant="light">Github</button></a
            >
          </div>
          <div class="col-6">
            <a href="">
              <button class="btn btn-light" variant="light">Website</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wName: String,
    wDesc1: String,
    wDesc2: String,
    wImage: String,
    website: String,
  },
};
</script>

<style lang="scss">
.portfolio-section {
  padding: 100px 0;
  .row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    border: 1px solid rgba(255, 236, 209, 0.1);
    box-shadow: 2px 2px 20px rgba(23, 86, 118, 0.2);
    border-radius: 3px;
    z-index: 1;

    .porfolio-image {
      position: relative;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    .porfolio-description {
      justify-content: center;
      align-items: center;
      align-content: center;
      display: flex;
      flex-direction: column;
      padding: 50px;
      box-shadow: 2px 2px 20px rgba(23, 86, 118, 0.2);
      border-left: 1px solid rgba(255, 236, 209, 0.1);

      h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        letter-spacing: 0.1em;
        text-align: center;
      }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: justify;
      }
    }

    .buttons {
      display: flex;
      padding: 0 20px;

      .col-6 {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
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
  }
}
</style>
