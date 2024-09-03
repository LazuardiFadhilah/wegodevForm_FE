import locale73254525 from '../../lang/id.json'
import locale9ec66352 from '../../lang/en.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"id","name":"Indonesia","iso":"id-ID","file":"id.json"},{"code":"en","name":"English","iso":"en-US","file":"en.json"}],
  defaultLocale: "id",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "/Users/lazuardifadhilah/Code/wgdForm/frontend/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"id","name":"Indonesia","iso":"id-ID","file":"id.json"},{"code":"en","name":"English","iso":"en-US","file":"en.json"}],
  localeCodes: ["id","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'id.json': () => Promise.resolve(locale73254525),
  'en.json': () => Promise.resolve(locale9ec66352),
}
