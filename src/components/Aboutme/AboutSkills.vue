<template>
  <div class="about-content">
    <div class="row ">
      <div class="col-6 row-eq-height justify-content-center">
        <div class="row">
          <div class="about-info col-padder">
            <h1>Hello</h1>
            <p>
              I am Riko and I’m pleased to welcome you to my website! Front-end
              development is something that drives me and I love making designs
              into reality. In my freetime I enjoy running and to play discgolf.
              Also love to pluck some tunes on guitar and ukulele. Currently
              seeking front-end development job which would
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 row-eq-height justify-content-center">
        <div class="about-skills col-padder">
          <h1>Skills</h1>
          <div class="row skills">
            <div class="col-3">
              <i
                class="fab fa-html5"
                style="font-size: 3rem; color: #F16529;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-css3-alt"
                style="font-size: 3rem; color: #2965F1;"
              ></i>
            </div>

            <div class="col-3">
              <i class="fab fa-js" style="font-size: 3rem; color: #F7DF1E;"></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-vuejs"
                style="font-size: 3rem; color: #41B883;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-git-alt"
                style="font-size: 3rem; color: #DE4C36;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-php"
                style="font-size: 3rem; color: #6181B6;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-laravel"
                style="font-size: 3rem; color: #FF2D20;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-wordpress"
                style="font-size: 3rem; color: #207196;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-drupal"
                style="font-size: 3rem; color: #0097D7;"
              ></i>
            </div>

            <div class="col-3">
              <i
                class="fab fa-figma"
                style="font-size: 3rem; color: #000000;"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-content {
  padding: 0 15%;
  .row-eq-height {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .about-info {
    border: 1px solid rgba(255, 236, 209, 0.1);
    box-shadow: 2px 2px 20px rgba(23, 86, 118, 0.2);
    border-radius: 3px;

    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.2em;
      padding: 0;
      margin: 0;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      text-align: justify;
      letter-spacing: 0.1em;
    }
  }

  .about-skills {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    border: 1px solid rgba(255, 236, 209, 0.1);
    box-shadow: 2px 2px 20px rgba(23, 86, 118, 0.2);
    border-radius: 3px;

    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-align: justify;
      letter-spacing: 0.1em;
      margin-block-start: 0em;
      margin-block-end: 0em;
      width: 100%;
    }

    .skills {
      padding: 10px;
    }
  }
}
</style>
