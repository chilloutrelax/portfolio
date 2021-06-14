<template>
  <header>
    <nav class="navbar container">
      <div class="brand">
        <router-link to="/">
          <div class="h-text">
            <span class="header-text-1">R</span>
            <span class="header-text-2">M</span>
          </div>
        </router-link>
      </div>
      <div class="menu-box">
        <ul class="menu-items">
          <li><a href="/#">About me</a></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

header {
  border-bottom: 1px solid rgba(171, 163, 89, 0.1);
  .navbar {
    .brand {
      display: flex;

      .h-text {
        position: absolute;
        font-family: $font2;
        font-size: $fsize2;
        z-index: 5;
        font-style: normal;
        font-weight: normal;
        line-height: 10px;
      }
      .header-text-1 {
        top: 13px;
        position: absolute;
        transform: rotate(-45deg);
        color: #175676;
        text-shadow: 2px 2px 2px rgba(54, 47, 47, 0.25);
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
      }
      .header-text-2 {
        margin-left: 20px;
        color: #cce6f4;
        text-shadow: 2px 2px 2px rgba(54, 47, 47, 0.25);
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
      }
    }

    .menu-box {
      .menu-items {
        display: flex;
        flex-direction: row;
        font-family: $font3;

        li {
          margin: 0 20px;

          a {
            text-decoration: none;
            color: cyan;
            text-transform: uppercase;
            letter-spacing: 5%;
            font-size: $fsize1;
            color: #175676;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
