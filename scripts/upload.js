const ci = require('miniprogram-ci')
const path = require('path')

const project = new ci.Project({
  appid: 'wxb69b12e010e1f369',
  type: 'miniProgram',
  projectPath: path.resolve(__dirname, '..'),
  privateKeyPath: path.resolve(__dirname, '../.private.key'),
  ignores: ['node_modules/**/*', '.git/**/*', 'scripts/**/*'],
})

const version = process.argv[2] || '1.0.0'
const desc = process.argv[3] || `Upload at ${new Date().toISOString()}`

;(async () => {
  try {
    console.log(`Uploading version ${version}...`)
    const result = await ci.upload({
      project,
      version,
      desc,
      setting: {
        es6: true,
        es7: true,
        minifyJS: true,
        minifyWXML: true,
        minifyWXSS: true,
        autoPrefixWXSS: true,
      },
      onProgressUpdate: console.log,
    })
    console.log('Upload success:', result)
  } catch (err) {
    console.error('Upload failed:', err)
    process.exit(1)
  }
})()
