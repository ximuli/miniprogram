const ci = require('miniprogram-ci')
const path = require('path')

const project = new ci.Project({
  appid: 'wxb69b12e010e1f369',
  type: 'miniProgram',
  projectPath: path.resolve(__dirname, '..'),
  privateKeyPath: path.resolve(__dirname, '../.private.key'),
  ignores: ['node_modules/**/*', '.git/**/*', 'scripts/**/*'],
})

;(async () => {
  try {
    console.log('Generating preview...')
    const result = await ci.preview({
      project,
      desc: `Preview at ${new Date().toISOString()}`,
      setting: {
        es6: true,
        es7: true,
        minifyJS: true,
        minifyWXML: true,
        minifyWXSS: true,
        autoPrefixWXSS: true,
      },
      qrcodeFormat: 'image',
      qrcodeOutputDest: path.resolve(__dirname, '../preview-qrcode.jpg'),
      onProgressUpdate: console.log,
    })
    console.log('Preview success! QR code saved to preview-qrcode.jpg')
    console.log(result)
  } catch (err) {
    console.error('Preview failed:', err)
    process.exit(1)
  }
})()
