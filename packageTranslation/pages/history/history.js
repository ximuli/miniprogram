Page({
  data: {
    history: []
  },
  onTapItem: function(e) {
    wx.redirectTo({
      url: `/packageTranslation/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ history: wx.getStorageSync('history') })
  }
})