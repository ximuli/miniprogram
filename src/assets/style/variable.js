// const baseImgUrl = process.env.NODE_ENV === 'test' ? 'red' : 'green'

module.exports = {
  baseImgUrl: process.env.NODE_ENV === 'test' ? 'http://www.test.com/' : 'http://www.prod.com/'
}