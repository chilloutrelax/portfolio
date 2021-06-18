<template>
  <div class="about-content container">
    <div class="row ">
      <div
        class="col-6 row-eq-height justify-content-center"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="300"
      >
        <div class="row">
          <div class="about-info col-padder">
            <!-- <div class="about-image">
              <img src="@/assets/dummypic.png" alt="" />
            </div> -->
            <div class="left-padder">
              <h2>Hello</h2>
              <p>
                I am Riko and I’m pleased to welcome you to my website!
                Front-end development is something that drives me and I love
                making designs into reality. In my freetime I enjoy running and
                to play discgolf. Also love to pluck some tunes on guitar and
                ukulele. Currently seeking front-end development job.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutSkills></AboutSkills>
    </div>
  </div>
</template>

<script>
import AboutSkills from "@/components/Aboutme/AboutSkills";

export default {
  components: {
    AboutSkills,
  },
};
</script>

<style lang="scss">
.about-content {
  .row-eq-height {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .about-info {
    position: relative;
    border: 1px solid rgba(255, 236, 209, 0.1);
    box-shadow: 2px 2px 20px rgba(23, 86, 118, 0.2);
    border-radius: 3px;
    z-index: 1;
    .left-padder {
      h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #175676;
        padding: 0;
        margin: 0;
        padding-bottom: 10px;
      }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 1rem;
        line-height: 23px;
        text-align: justify;
        letter-spacing: 0.1em;
        line-height: 2rem;
      }
    }

    // .about-image {
    //   img {
    //     width: 200px;
    //     position: absolute;
    //     top: 10%;
    //     left: -20%;
    //     z-index: 0;
    //   }
    // }
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
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #175676;
      width: 100%;
      padding-bottom: 10px;
    }

    .skills {
      padding: 10px;
      justify-content: center;
      align-items: center;
      .col-3 {
        text-align: center;
        padding: 5px;
      }
    }
  }
}
</style>
