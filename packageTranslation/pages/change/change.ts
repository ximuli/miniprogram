const app = getApp<IAppOption>()

interface ChangePageData {
  selectLang: LangItem
  langList: LangItem[]
}

Page<ChangePageData, WechatMiniprogram.IAnyObject>({
  data: {
    selectLang: {} as LangItem,
    langList: app.languageData.langList,
  },

  onTapItem(e: WechatMiniprogram.TouchEvent) {
    const langObj = e.currentTarget.dataset as unknown as LangItem
    this.setData({ selectLang: langObj })
    app.languageData.selectLang = langObj // 将被选语言存储到全局数据里，方便调用
    wx.setStorageSync('language', langObj)
    wx.navigateBack()
  },

  onShow() {
    // 这里就用到了上面方法中存到全局数据里的被选语言，这样才能保证每次进入语言选择页面，对号依然显示在正确的位置
    this.setData({ selectLang: app.languageData.selectLang })
  },
})
