interface HistoryPageData {
  history: HistoryItem[]
}

Page<HistoryPageData, WechatMiniprogram.IAnyObject>({
  data: {
    history: [],
  },

  onTapItem(e: WechatMiniprogram.TouchEvent) {
    const { query } = e.currentTarget.dataset
    wx.redirectTo({
      url: `/packageTranslation/pages/index/index?query=${query}`,
    })
  },

  onShow() {
    this.setData({ history: wx.getStorageSync('history') || [] })
  },
})
