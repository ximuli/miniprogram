const app = getApp()

Page({
  data: {
    hitokoto: '',
    isShowSettings: false,
    tapping: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getYiyan()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  getYiyan() {
    const self = this
    wx.request({
      url: 'https://v1.hitokoto.cn///',
      success(res) {
        const { hitokoto } = res.data
        if (hitokoto) {
          self.setData({
            hitokoto
          })
        } else {
          self.setData({
            hitokoto: '在季节的车上，如果你要提前下车，请别推醒装睡的我，这样我可以沉睡到终点，假装不知道你已经离开。'
          })
        }
      },
      fail(err) {
        self.setData({
          hitokoto: '在季节的车上，如果你要提前下车，请别推醒装睡的我，这样我可以沉睡到终点，假装不知道你已经离开。'
        })
      }
    })
  },
  onNext(e) {
    // 动画
    this.animate('.wrapper', [
      { opacity: 1, translateX: '0' },
      { opacity: 0, translateX: '-10%' },
      { opacity: 0, translateX: '10%' },
      { opacity: 1, translateX: '0' },
    ], 600, function () {
        this.clearAnimation('.wrapper', { opacity: true, translateX: true }, function () {
          console.log("清除了 .wrapper 上的 opacity 和 translateX 属性")
      })
    }.bind(this))

    this.asyncUpdateYiyan()
  },
  asyncUpdateYiyan() {
    const timerId = setTimeout(() => {
      this.getYiyan()
      clearTimeout(timerId)
    }, 300)
  },
  changeSettingSwitch() {
    if (!this.data.isShowSettings) {
      this.setData({
        tapping: true
      })
      const timerId = setTimeout(() => {
        this.setData({
          tapping: false
        })
        clearTimeout(timerId)
      }, 450)
    }
    this.setData({
      isShowSettings: !this.data.isShowSettings
    })
  },
  closeSetting(e) {
    this.setData({
      isShowSettings: false
    })
  }
})