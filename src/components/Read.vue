<template>
  <div class="read">
    <div class="content">
      <BlockUI v-if="loading" :url="loadingImage"></BlockUI>

      <div class="gallery">
        <div class="book-group">
          <div class="book-group-title">正在读({{reading.length}}本)</div>
          <div class="book-group-content">
            <div class="book-container" v-for="b of reading" :key="b.book_id">
              <book :book="b"></book>
            </div>
          </div>
        </div>
        <div class="book-group">
          <div class="book-group-title">已经读过({{read.length}}本)</div>
          <div class="book-group-content">
            <div class="book-container" v-for="b of read" :key="b.book_id">
              <book :book="b"></book>
            </div>
          </div>
        </div>
        <div class="book-group">
          <div class="book-group-title">打算读({{wish.length}}本)</div>
          <div class="book-group-content">
            <div class="book-container" v-for="b of wish" :key="b.book_id">
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
import LoadingImage from '../assets/image/loading.gif'

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
      read: [],
      loadingImage: LoadingImage,
      loading: false
    }
  },
  mounted () {
    this.getBooks()
  },
  methods: {
    getBooks () {
      this.loading = true
      API.getBooks(this.userId).done(resp => {
        this.loading = false

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
    background-image: url('../assets/image/background.jpg');

    .content {
      text-align:center;

      .gallery {
        width: 100%;
        display: inline-block;

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

          .book-group-content {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;

            @media screen and (max-width: 500px) {
              .book-container {
                flex: 0 0 50%;
              }
            }

            @media screen and (min-width: 500px) {
              .book-container {
                flex: 0 0 33.3%;
              }
            }

            @media screen and (min-width: 650px) {
              .book-container {
                flex: 0 0 25%;
              }
            }

            @media screen and (min-width: 800px) {
              .book-container {
                flex: 0 0 20%;
              }
            }
            @media screen and (min-width: 1200px) {
              .book-container {
                flex: 0 0 14.28%;
              }
            }
            @media screen and (min-width: 1550px) {
              .book-container {
                flex: 0 0 10%;
              }
            }

            .book-container {
              display: inline-block;
              text-align: center;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
</style>
