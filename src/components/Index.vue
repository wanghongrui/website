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
  .index {
    position: relative;
    width: 100%;
    height: 100%;
    overflow:auto;
    background-image: url('../assets/image/bg.png');

    .info {
      position: absolute;
      width: 560px;
      height: 110px;
      background-color: #09c;
      left: 50%;
      margin-left: -280px;
      top: 50%;
      opacity: 0.8;

      .title {
        text-align: center;
        padding: 12px;
        color: #fff;
        font-size: 24px;
      }
      .link {
        position: relative;
        padding: 12px;
        text-align: center;

        a {
          padding: 12px;
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }
</style>
