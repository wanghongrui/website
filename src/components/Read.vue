<template>
  <div class="read">
    <div class="content">
      <div class="gallery">
        <div class="book-group">
          <div class="book-group-title">正在读({{reading.length}}本)</div>
          <div class="row container-fluid">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" v-for="b of reading" :key="b.book_id">
              <book :book="b"></book>
            </div>
          </div>
        </div>
        <div class="book-group">
          <div class="book-group-title">已经读过({{read.length}}本)</div>
          <div class="row container-fluid">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" v-for="b of read" :key="b.book_id">
              <book :book="b"></book>
            </div>
          </div>
        </div>
        <div class="book-group">
          <div class="book-group-title">打算读({{wish.length}}本)</div>
          <div class="row container-fluid">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" v-for="b of wish" :key="b.book_id">
              <book :book="b"></book>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../assets/script/api'

import Book from './Book.vue'

export default {
  name: 'read',
  components: {
    Book
  },
  data () {
    return {
      userId: '151041935',
      wish: [],
      reading: [],
      read: []
    }
  },
  mounted () {
    this.getBooks()
  },
  methods: {
    getBooks () {
      API.getBooks(this.userId).done(resp => {
        resp.collections.forEach(book => {
          this[book.status].push(book)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .read {
    position: relative;
    width: 100%;
    height: 100%;
    overflow:auto;
    background-image: url('../assets/image/background.jpg');

    .content {
      .gallery {
        .book-group {
          padding: 6px;
          .row {
            padding: 12px;
          }

          .book-group-title {
            background: #fff;
            height: 42px;
            line-height: 42px;
            padding-left: 10px;
            color: #09c;
          }
        }
      }
    }
  }
</style>
