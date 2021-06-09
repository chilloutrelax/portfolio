<template>
  <header>
    <nav class="navbar container-fluid">
      <div class="brand">
        <router-link to="/"><h2 class="brand-op-1">RM</h2></router-link>
      </div>
      <div class="menu-box">
        <ul class="menu-items">
          <li>About me</li>
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
  z-index: 10;
  position: absolute;
  width: 100%;
  background: $color6;
  padding: 0 10%;

  .navbar {
    display: flex;
    padding: 0;
    z-index: 200;

    .brand {
      h2 {
        color: $color2;
        font-size: 25px;
        line-height: 3rem;
      }
    }

    .menu-box {
      .menu-items {
        display: flex;

        li {
          color: $color2;
          margin-left: 50px;
          font-size: 18px;

          .brand-op-2 {
            opacity: 0;
          }

          a {
            color: $color2;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
