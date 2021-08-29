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
    // 请求结果诗词临时存放
    tempPoemObj: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getYiyan()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getPoem('first')
  },
  getPoem(param) {
    jinrishici.load(res => {
      if (res.status === 'success') {
        this.data.tempPoemObj = res.data
        if (param === 'first') {
          this.createMainAnimIn()
        }
      }
    })
  },
  // 下一句
  onNext(e) {
    this.createIconAnim()
    this.createMainAnim()
    // this.getYiyan()
    this.getPoem()
  },
  // 给更新icon加个动画
  createIconAnim() {
    this.animate('.operations .next', [
      { rotate: 0, ease: 'ease-in-out'  },
      { rotate: 360, ease: 'ease-in-out' },
    ], 300, function () {
      this.clearAnimation('.operations .next', function () {
        console.log("清除了 .operations .next 上的所有动画属性")
      })
    }.bind(this))
  },
  // 给主内容加个动画
  createMainAnim() {
    // 渐出
    this.animate('.wrapper .main', [
      { translate: ['50%', '-50%'], opacity:'1', ease: 'ease-in-out'  },
      { translate: ['-100%', '-50%'], opacity:'0', ease: 'ease-in-out' },
    ], 300, () => {
      this.createMainAnimIn()
    })
  },
  // 给主内容区创建一个渐入动画
  createMainAnimIn() {
    // 渐出动画结束后，更新诗词并开始渐入动画
    const { origin, content } = this.data.tempPoemObj
    this.setData({
      poemTitle: origin.title,
      poemAuthor: origin.author,
      poemContent: content
    })
    this.animate('.wrapper .main', [
      { translate: ['150%', '-50%'], opacity:'0', ease: 'ease-in-out'  },
      { translate: ['50%', '-50%'], opacity:'1', ease: 'ease-in-out' },
    ], 300, () => {
      this.clearAnimation('.wrapper .main', () => {
        console.log("清除了 .wrapper .main 上的所有动画属性")
      })
    })
  },
  goBack() {
    wx.navigateBack()
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
})