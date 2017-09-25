<template>
  <div class="index">
    <div class="content">
      <div class="portrait">
        <img :src="avatar">
      </div>

      <div class="gallery">
        <div class="book-item" v-for="b of reading">
          <div class="book-content">
            <div class="book-img">
              <img :src="b.book.image">
            </div>
            <div class="book-title">
              <a :href="b.book.alt" :title="b.book.summary">{{b.book.title}}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="paging">
        <div class="to"></div>
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../assets/script/api'

export default {
  name: 'index',
  data () {
    return {
      userId: '151041935',
      avatar: '',
      name: '',
      douban: '',
      wish: [],
      reading: [],
      read: []
    }
  },
  mounted () {
    this.getUser()
    this.getBooks()
  },
  methods: {
    getBooks () {
      API.getBooks(this.userId).done(resp => {
        resp.collections.forEach(book => {
          this[book.status].push(book)
        })
      })
    },
    getUser () {
      API.getUserDetail(this.userId).done(resp => {
        ({large_avatar: this.avatar} = resp)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    width: 100%;
    height: 100%;

    .content {
      width: 600px;
      height: 300px;
      position: absolute;
      left: 50%;
      margin-left: -300px;
      top: 50%;
      margin-top: -200px;
      background: #099;

      .portrait {
        width: 108px;
        height: 108px;
        background: #000;
        border-radius: 54px;
        position: absolute;
        left: 50%;
        margin-left: -54px;
        margin-top: -54px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }

      .gallery {
        margin-top: 72px;
        padding: 6px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        .book-item{
          margin: 6px;
          flex-grow: 1;
          text-align: center;

          .book-content {
            width: 140px;
            display: inline-block;
            background-color: #fff;
            padding: 12px 0px;

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
        }
      }
    }

  }
</style>
