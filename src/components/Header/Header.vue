<template>
  <header>
    <nav class="navbar container">
      <div class="brand">
        <router-link to="/"><h2 class="brand-op-1">RM</h2></router-link>
      </div>
      <div class="menu-box">
        <ul class="menu-items">
          <li><router-link to="/about">About me</router-link></li>
          <li><router-link to="/about">Portfolio</router-link></li>
          <li><router-link to="/about">Contact</router-link></li>
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
  position: absolute;
  width: 100%;

  .navbar {
    display: flex;
    padding: 0;
    z-index: 200;

    .brand {
      h2 {
        color: $color1;
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
