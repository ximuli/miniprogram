const jinrishici = require('../../../utils/jinrishici.js')
const app = getApp()

Page({
  data: {
    // 一言
    hitokoto: '',
    // 诗词
    poemTitle: '',
    poemAuthor: '',
    poemContent: '',
    isShowSetting: false,
    tapping: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getYiyan()
    this.getPoem()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  getPoem() {
    jinrishici.load(res => {
      if (res.status === 'success') {
        this.setData({
          poemTitle: res.data.origin.title,
          poemAuthor: res.data.origin.author,
          poemContent: res.data.content
         })
      }
    })
  },
  getYiyan() {
    const self = this
    wx.request({
      url: 'https://v1.hitokoto.cn',
      success(res) {
        const { hitokoto } = res.data
        if (hitokoto) {
          self.setData({ hitokoto })
        } else {
          self.setData({
            hitokoto: '在季节的车上，如果你要提前下车，请别推醒装睡的我，这样我可以沉睡到终点，假装不知道你已经离开。'
          })
        }
      }
    })
  },
  // 下一句
  onNext(e) {
    // this.getYiyan()
    this.getPoem()
  },
  goBack() {
    wx.navigateBack()
  }
})