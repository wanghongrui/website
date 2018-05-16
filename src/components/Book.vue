<template>
  <div class="book">
    <div class="book-img">
      <img :src="'https://images.weserv.nl/?url=' + book.book.image.substring(7)">
    </div>
    <div class="book-title">
      <a class="book-href" :href="book.book.alt" target="_blank" :title="book.book.summary">{{book.book.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book',
  props: ['book']
}
</script>

<style lang="scss" scoped>
.book {
  width: 140px;
  display: inline-block;
  background-color: #fff;
  padding: 12px 0;
  margin: 5px;
  text-align: center;
  box-shadow: 2px 2px 2px 2px #C1C1C1;

  .book-img {
    display: inline-block;
    width: 105px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .book-title {
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    font-size: 12px;
    margin-top: 6px;
    .book-href{
      color: #409eff;
      text-decoration: none;
    }
  }
}
</style>
