Component({
  properties: {
    current: {
      type: Number,
      value: 0
    }
  },
  data: {
    tabList: [
      {
        text: 'TRANSLATE',
        iconPath: '/assets/nav-icons/translate.png',
        selectedIconPath: '/assets/nav-icons/translate-selected.png'
      },
      {
        text: 'HISTORY',
        iconPath: '/assets/nav-icons/history.png',
        selectedIconPath: '/assets/nav-icons/history-selected.png'
      }
    ]
  },
  methods: {
    tabChange(e) {
      console.log('tab change', e)
      console.log('this.current', this.properties.current)
      const { text } = e.detail.item
      let urlPart = text === 'TRANSLATE' ? 'index' : 'history'
      wx.navigateTo({
        url: `/packageTranslation/pages/${urlPart}/${urlPart}`
      })
    }
  }
});