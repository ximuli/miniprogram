import MD5 from './md5.min.js'

const appid = '20180823000197906'
const key = 'ggqQydSMSHEPi8R5yGON'

function translate(q: string, from?: string, to?: string): Promise<TranslateResult> {
  return new Promise<TranslateResult>(function (resolve, reject) {
    if (!from) {
      from = 'auto'
    }
    if (!to) {
      to = 'en'
    }
    const salt = new Date().getTime()
    const sign = MD5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
      data: {
        q,
        appid,
        salt,
        from,
        to,
        sign,
      },
      success(res) {
        if (res.data && (res.data as TranslateResult).trans_result) {
          resolve(res.data as TranslateResult)
        } else {
          reject({ status: 'error' as const, msg: '翻译失败' })
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            duration: 3000,
          })
        }
      },
      fail() {
        reject({ status: 'error' as const, msg: '网络异常' })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000,
        })
      },
    })
  })
}

export { translate }
