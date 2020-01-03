const app = getApp()

Page({
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
  }
})