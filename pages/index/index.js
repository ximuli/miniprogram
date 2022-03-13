// import { translate } from '../../utils/api.js'
// const app = getApp()

Page({
  data: {
    navList: [
      {
        title: '在线翻译',
        desc: '一键翻译，快捷又方便',
        btnText: '去试试',
        iconSource: './../../assets/imgs/home/icon_translation.png',
        route: '/packageTranslation/pages/index/index'
      },
      {
        title: '一言半语',
        desc: '古诗欣赏，陶醉你的心灵',
        btnText: '去欣赏',
        iconSource: './../../assets/imgs/home/icon_a_word.png',
        route: '/packageYiyan/pages/index/index'
      },
      {
        title: '个人简历',
        desc: '这里有更多关于我的信息',
        btnText: '去看看',
        iconSource: './../../assets/imgs/home/icon_resume.png',
        route: ''
      }
    ],
    targetLang: {},
    isHidden: true,
    query: '',
    result: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if(options.query) {
    //   this.setData({ query: options.query })
    // }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },
  tapToDetail(e) {
    const { title } = e.currentTarget.dataset
    const URL = this.data.navList.find((item => item.title === title))['route']
    if (URL === '') {
      wx.showToast({
        title: '暂未开放',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: URL
      })
    }
  }
})