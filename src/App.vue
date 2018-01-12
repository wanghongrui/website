<template>
  <div id="app">
    <div id="header" class="header-container">
      <vheader></vheader>
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vheader from './components/Header.vue'
import Headroom from 'headroom.js'

export default {
  name: 'app',
  components: {
    vheader
  },
  mounted () {
    let header = document.getElementById('header')
    let headroom = new Headroom(header, {
      'tolerance': 0,
      'offset': 0,
      'classes': {
        'initial': 'headroom',
        'pinned': 'headroom--pinned',
        'unpinned': 'headroom--unpinned'
      }
    })
    headroom.init()
  }
}
</script>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/theme.scss';

html, body{
  width: 100%;
  height: 100%;
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
      z-index: 10;

      &.headroom {position: fixed;top: 0;left: 0;right: 0;transition: all .5s ease-in-out;}  
      &.headroom--unpinned {top: -60px;}  
      &.headroom--pinned {top: 0;}
    }

    .content-container {
      position: relative;
      width: 100%;
      height: 100%;
      padding-top: $header-height;
    }
  }
}
</style>
