// https://api.douban.com/v2/book/user/151041935/collections
// https://api.douban.com/v2/user/:name
let url = 'https://api.douban.com/v2/'

import $ from 'jquery'

export default {
  getBooks (userId) {
    return $.ajax({
      async: false,
      url: `${url}/book/user/${userId}/collections`,
      dataType: 'jsonp'
    })
  },
  getUserDetail (userId) {
    return $.ajax({
      async: false,
      url: `${url}/user/${userId}`,
      dataType: 'jsonp'
    })
  }
}
