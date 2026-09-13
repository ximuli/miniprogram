/** 语言选项 */
interface LangItem {
  chs: string
  lang: string
  index: number
}

/** 首页导航卡片 */
interface NavItem {
  title: string
  desc: string
  btnText: string
  iconSource: string
  route: string
}

/** 百度翻译 API 响应 */
interface TranslateResult {
  from: string
  to: string
  trans_result: TranslateResultItem[]
}

interface TranslateResultItem {
  src: string
  dst: string
}

/** 翻译历史记录 */
interface HistoryItem {
  query: string
  result: string
}

/** 通用 API 错误 */
interface ApiError {
  status: 'error'
  msg: string
}

/** 今日诗词 API 响应 */
interface JinrishiciResponse {
  status: string
  data: JinrishiciData
  errMessage?: string
}

interface JinrishiciData {
  content: string
  origin: JinrishiciOrigin
}

interface JinrishiciOrigin {
  title: string
  dynasty: string
  author: string
  content: string[]
}

/** md5 模块声明 */
declare module './md5.min.js' {
  function md5(message: string): string
  export default md5
}

/** 小程序 App 全局类型 */
interface IAppOption {
  languageData: {
    selectLang: LangItem
    langList: LangItem[]
  }
}
