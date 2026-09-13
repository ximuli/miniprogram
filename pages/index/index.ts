interface IndexPageData {
  navList: NavItem[]
}

Page<IndexPageData, WechatMiniprogram.IAnyObject>({
  data: {
    navList: [
      {
        title: '在线翻译',
        desc: '一键翻译，快捷又方便',
        btnText: '去试试',
        iconSource: './../../assets/imgs/home/icon_translation.png',
        route: '/packageTranslation/pages/index/index',
      },
      {
        title: '一言半语',
        desc: '古诗欣赏，陶醉你的心灵',
        btnText: '去欣赏',
        iconSource: './../../assets/imgs/home/icon_a_word.png',
        route: '/packageYiyan/pages/index/index',
      },
      {
        title: '个人简历',
        desc: '这里有更多关于我的信息',
        btnText: '去看看',
        iconSource: './../../assets/imgs/home/icon_resume.png',
        route: '',
      },
    ],
  },
})
