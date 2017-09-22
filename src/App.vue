<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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

  #app {
    width: 100%;
    height: 100%;
    // background: $background-color;
    background: url('./assets/image/background.jpg');
  }
}
</style>
