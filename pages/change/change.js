const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectLang: {},
    langList: app.languageData.langList
  },
  onTapItem: function(e) {
    console.log(e)
    let langObj = e.currentTarget.dataset
    this.setData({ selectLang: langObj })
    app.languageData.selectLang = langObj  //将被选语言存储到全局数据里，方便调用
    wx.setStorageSync('language', langObj)
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //这里就用到了上面方法中存到全局数据里的被选语言，这样才能保证每次进入语言选择页面，对号依然显示在正确的位置
    this.setData({ selectLang: app.languageData.selectLang }) 
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
    
  }
})