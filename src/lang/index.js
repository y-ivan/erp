
import Vue from "vue"
import VueI18n from "vue-i18n"

import Element from "element-ui"

// element-locales
import elementEnLocale from "element-ui/lib/locale/lang/en"
import elementZhCNLocale from "element-ui/lib/locale/lang/zh-CN"

import enLocale from "./locales/en"
import zhCNLocale from "./locales/zh-CN"

Vue.use(VueI18n)

export const DEFAULT_LANG = "zh-CN"

export const LOCALE_KEY = "localeLanguage"

export const locales = {
  "zh-CN": {
    ...zhCNLocale,
    ...elementZhCNLocale
  },
  "en": {
    ...enLocale,
    ...elementEnLocale
  }
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  silentFallbackWarn: true,
  messages: locales
})

Vue.use(Element, {
  i18n: (key, val) => i18n.t(key, val)
})

export const langSetup = lang => {
  if (lang === undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY)
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }

  window.localStorage.setItem(LOCALE_KEY, lang)

  // Object.keys(locales).forEach(lang => {
  //   document.body.classList.remove(`lang-${lang}`)
  // })

  // document.body.classList.add(`lang-${lang}`)

  // document.body.setAttribute("lang", lang)

  // Vue.config.lang = lang

  i18n.locale = lang
}

langSetup()

export default i18n
