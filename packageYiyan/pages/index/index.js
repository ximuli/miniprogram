const app = getApp()

Page({
  data: {
    hitokoto: '在季节的车上，如果你要提前下车，请别推醒装睡的我，这样我可以沉睡到终点，假装不知道你已经离开。'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.query) {
      this.setData({ query: options.query })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getYiyan()
  },
  getYiyan() {
    const self = this
    wx.request({
      url: 'https://v1.hitokoto.cn',
      success(res) {
        const { hitokoto } = res.data
        self.setData({
          hitokoto
        })
      }
    })
  },
  onNext() {
    this.getYiyan()
  }
})