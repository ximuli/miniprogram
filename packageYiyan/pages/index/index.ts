import { load } from '../../../utils/jinrishici'

interface YiyanPageData {
  poemTitle: string
  poemAuthor: string
  poemContent: string
  tempPoemObj: JinrishiciData | null
}

Page<YiyanPageData, WechatMiniprogram.IAnyObject>({
  data: {
    poemTitle: '',
    poemAuthor: '',
    poemContent: '',
    tempPoemObj: null,
  },

  onShow() {
    this.getPoem('first')
  },

  getPoem(param?: string) {
    load((res: JinrishiciResponse) => {
      if (res.status === 'success') {
        this.data.tempPoemObj = res.data
        if (param === 'first') {
          this.createMainAnimIn()
        }
      }
    })
  },

  // 下一句
  onNext() {
    this.createIconAnim()
    this.createMainAnim()
    this.getPoem()
  },

  // 给更新 icon 加个动画
  createIconAnim() {
    this.animate(
      '.operations .next',
      [
        { rotate: 0, ease: 'ease-in-out' },
        { rotate: 360, ease: 'ease-in-out' },
      ],
      300,
      () => {
        this.clearAnimation('.operations .next', () => {
          console.log('清除了 .operations .next 上的所有动画属性')
        })
      },
    )
  },

  // 给主内容加个动画
  createMainAnim() {
    // 渐出
    this.animate(
      '.wrapper .main',
      [
        { translate: ['50%', '-50%'], opacity: '1', ease: 'ease-in-out' },
        { translate: ['-100%', '-50%'], opacity: '0', ease: 'ease-in-out' },
      ],
      300,
      () => {
        this.createMainAnimIn()
      },
    )
  },

  // 给主内容区创建一个渐入动画
  createMainAnimIn() {
    // 渐出动画结束后，更新诗词并开始渐入动画
    if (!this.data.tempPoemObj) return
    const { origin, content } = this.data.tempPoemObj
    this.setData({
      poemTitle: origin.title,
      poemAuthor: origin.author,
      poemContent: content,
    })
    this.animate(
      '.wrapper .main',
      [
        { translate: ['150%', '-50%'], opacity: '0', ease: 'ease-in-out' },
        { translate: ['50%', '-50%'], opacity: '1', ease: 'ease-in-out' },
      ],
      300,
      () => {
        this.clearAnimation('.wrapper .main', () => {
          console.log('清除了 .wrapper .main 上的所有动画属性')
        })
      },
    )
  },

  goBack() {
    wx.navigateBack()
  },
})
