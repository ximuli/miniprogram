App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.languageData.selectLang = wx.getStorageSync('language') || this.languageData.langList[0]
  },
  languageData: {
    selectLang: {},
    langList: [
      {
        chs: '英语',
        lang: 'en',
        index: 0
      },
      {
        chs: '中文',
        lang: 'zh',
        index: 1
      },
      {
        chs: '日语',
        lang: 'jp',
        index: 2
      },
      {
        chs: '韩语',
        lang: 'kor',
        index: 3
      },
      {
        chs: '法语',
        lang: 'fra',
        index: 4
      },
      {
        chs: '西班牙语',
        lang: 'spa',
        index: 5
      },
      {
        chs: '阿拉伯语',
        lang: 'ara',
        index: 6
      },
      {
        chs: '俄语',
        lang: 'ru',
        index: 7
      },
      {
        chs: '德语',
        lang: 'de',
        index: 8
      },
      {
        chs: '泰语',
        lang: 'th',
        index: 9
      }
    ]
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
