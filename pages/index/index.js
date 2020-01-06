import { translate } from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    targetLang: {},
    isHidden: true,
    query: '',
    result: ''
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
  onShow: function () {},
  goToTranslation() {
    console.log(666)
    wx.navigateTo({
      url: '/packageTranslation/pages/index/index'
    })
  }
})