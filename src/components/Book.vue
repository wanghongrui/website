<template>
  <div class="book">
    <div class="book-img">
      <img :src="book.book.image">
    </div>
    <div class="book-title">
      <a :href="book.book.alt" target="_blank" :title="book.book.summary">{{book.book.title}}</a>
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
    width: 90%;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    font-size: 12px;
    margin-top: 6px;
  }
}
</style>
