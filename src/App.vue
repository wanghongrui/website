<template>
  <div id="app">
    <div class="header-container">
      <vheader></vheader>
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vheader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    vheader
  }
}
</script>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/theme.scss';

html, body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;

  $header-height: 60px;

  #app {
    width: 100%;
    height: 100%;
    position: relative;
    background: $background-color;
    .header-container {
      position: fixed;
      height: $header-height;
      background: #09c;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    .content-container {
      width: 100%;
      height: calc(100% - #{$header-height});
      margin-top: $header-height;
    }
  }
}
</style>
