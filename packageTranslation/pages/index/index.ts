import { translate } from '../../../utils/api'

const app = getApp<IAppOption>()

interface TranslationPageData {
  targetLang: LangItem
  isHidden: boolean
  query: string
  result: string
}

Page<TranslationPageData, WechatMiniprogram.IAnyObject>({
  data: {
    targetLang: {} as LangItem,
    isHidden: true,
    query: '',
    result: '',
  },

  onInput(e: WechatMiniprogram.Input) {
    this.setData({ query: e.detail.value })
    if (this.data.query.length > 0) {
      this.setData({ isHidden: false })
    } else {
      this.setData({ isHidden: true })
    }
  },

  emptyInput() {
    this.setData({ isHidden: true, query: '' })
  },

  onConfirm() {
    if (!this.data.query) return
    translate(this.data.query, 'auto', this.data.targetLang.lang)
      .then((res) => {
        this.setData({ result: res.trans_result[0].dst })

        // fix: 正确截断历史记录，最多保存 10 条
        let history: HistoryItem[] = wx.getStorageSync('history') || []
        history.unshift({ query: this.data.query, result: this.data.result })
        if (history.length > 10) {
          history = history.slice(0, 10)
        }
        wx.setStorageSync('history', history)
      })
      .catch(() => {
        // api.ts 内部已处理错误提示，此处仅阻止 unhandled rejection
      })
  },

  onLoad(options: Record<string, string | undefined>) {
    if (options.query) {
      this.setData({ query: options.query })
    }
  },

  onShow() {
    if (this.data.targetLang.lang !== app.languageData.selectLang.lang) {
      this.setData({ targetLang: app.languageData.selectLang })
      this.onConfirm() // 切换语言后自动翻译
    }
  },

  onTapToHistory() {
    wx.navigateTo({
      url: '/packageTranslation/pages/history/history',
    })
  },
})
