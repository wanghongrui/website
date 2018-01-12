<template>
  <div class="index">
    <div class="info">
      <h1 class="title">大洪小站</h1>
      <div class="link">
        <router-link :to="{ name: 'Read'}">读书</router-link>
        <router-link :to="{ name: 'Read'}">读书</router-link>
        <router-link :to="{ name: 'Read'}">读书</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/theme.scss';

  .index {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../assets/image/bg.jpg') no-repeat center top;
    background-size: cover;
    text-align: center;

    @media screen and (max-width: 500px) {
      .info {
        width: 100%;
        height: 90px;
        bottom: 0;
      }
    }

    @media screen and (min-width: 500px) {
      .info {
        width: 500px;
        height: 110px;
        left: 50%;
        margin-left: -250px;
        top: 50%;
      }
    }

    .info {
      position: fixed;
      background-color: $theme-color;
      opacity: 0.8;

      .title {
        text-align: center;
        padding: 12px;
        color: $background-font-color;
        font-size: 24px;
      }
      .link {
        position: relative;
        padding: 12px;
        text-align: center;

        a {
          padding: 12px;
          color: $background-font-color;
          font-size: 18px;
        }
      }
    }
  }
</style>
