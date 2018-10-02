import { translate } from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    targetLang: {},
    isHidden: true,
    query: '',
    result: ''
  },
  onInput: function(e) {
    this.setData({ query: e.detail.value })
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
    translate(this.data.query, 'auto', this.data.targetLang.lang).then(res => {
      this.setData({ result: res.trans_result[0].dst })

      let history = wx.getStorageSync('history') || []
      history.unshift({ query: this.data.query, result: this.data.result })
      history.length > 10 ? 10 : history.length //最多保存 10 条
      wx.setStorageSync('history', history)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.targetLang.lang !== app.languageData.selectLang.lang) {
      this.setData({ targetLang: app.languageData.selectLang })
      this.onConfirm()  //切换语言后自动翻译  
    } 
  }
})