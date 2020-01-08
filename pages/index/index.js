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
  goTo(e) {
    const { target } = e.currentTarget.dataset
    if (target === 'translation') {
      wx.navigateTo({
        url: '/packageTranslation/pages/index/index'
      })
    } else if (target === 'yiyan') {
      wx.navigateTo({
        url: '/packageYiyan/pages/index/index'
      })
    }
  }
})