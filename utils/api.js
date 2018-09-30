import MD5 from './md5.min.js'

const appid = '20180823000197906'
const key = 'ggqQydSMSHEPi8R5yGON'

function translate(q, from, to) {
  return new Promise(function(resovle, reject) {
    if (!from) { from = 'auto' }
    if (!to) { to = 'en' }
    let salt = (new Date).getTime()
    let sign = MD5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
      data: {
        q,
        appid,
        salt,
        from,
        to,
        sign
      },
      success(res) {
        if (res.data && res.data.trans_result) {
          resovle(res.data)
        }else {
          reject({status: 'error', msg: '翻译失败'})
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            duration: 3000
          })
        }
      },
      fail() {
        reject({ status: 'error', msg: '翻译失败' })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        })
      }
    })
  })
}

module.exports.translate = translate 