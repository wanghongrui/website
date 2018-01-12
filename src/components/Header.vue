<template>
  <div class="header">
    <h1 class="title">一闪一闪亮晶晶，漫天都是小星星，OPQ，RST，UVWXYZ...</h1>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/style/theme.scss';

  .header {
    .title {
      line-height: 60px;
      color: $background-font-color;
      font-size: 18px;
      margin-left: 10px;
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
    }
  }
</style>
