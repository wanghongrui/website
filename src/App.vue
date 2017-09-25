<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
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

  #app {
    width: 100%;
    height: 100%;
    position: relative;
    background: $background-color;
  }
}
</style>
