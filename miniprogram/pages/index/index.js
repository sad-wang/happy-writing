//index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {
    this.onGetOpenid(this.insertUser)
  },
  insertUser: () => {
    db.collection('t_user').where({
      _openid: app.globalData.openid
    }).count().then(res => {
      if (!res.total) {
        db.collection('t_user').add({
          data: {
            create_date: new Date().toLocaleDateString()
          },
          success: function(res) {
            console.log(res)
          },
          fail: console.error,
        })
      }
    })
  },
  onGetOpenid: function(callback) {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        callback()
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  toCoursePoster: () => {
    wx.navigateTo({
      url: '../coursePoster/coursePoster'
    })
  },
  toHomeworkDetail: () => {
    wx.navigateTo({
      url: '../homeworkDetail/homeworkDetail'
    })
  },
})
