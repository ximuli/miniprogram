import { translate } from '../../utils/api.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    targetLang: "英语",
    isHidden: true,
    query: '',
    result: ''
  },
  onInput: function(e) {
    this.setData({
      query: e.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({ isHidden: false })
    }else {
      this.setData({ isHidden: true })
    }
  },
  emptyInput: function() {
    this.setData({ isHidden: true, query: '' })
  },
  onConfirm: function() {
    if (!this.data.query) return 
    translate(this.data.query).then(res => {
      this.setData({ result: res.trans_result[0].dst })
    })
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
    
  }
})