// miniprogram/pages/courseDetail/courseDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toCourseLearn: () => {
    wx.navigateTo({
      url: '../courseLearn/courseLearn'
    })
  },
  learnDisable() {
    wx.showModal({
      title: '温馨提示',
      content: '完成上节课的课程学习才能继续本节课程的学习',
      confirmText: '知道了',
      showCancel: false,
      confirmColor: '#192e4d',
    })
  }
})
