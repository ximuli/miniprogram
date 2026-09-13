Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: '',
    },
    btnText: {
      type: String,
      value: '',
    },
    iconSource: {
      type: String,
      value: '',
    },
    route: {
      type: String,
      value: '',
    },
  },

  methods: {
    onTap() {
      if (!this.data.route) {
        wx.showToast({
          title: '暂未开放',
          icon: 'none',
        })
      } else {
        wx.navigateTo({
          url: this.data.route,
        })
      }
    },
  },
})
