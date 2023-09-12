import { createI18n } from 'vue-i18n'
import { configure } from 'vee-validate'
import { localize, setLocale as setValidateLocale } from '@vee-validate/i18n'
import { useCookies } from '@vueuse/integrations/useCookies'
import * as jsonLang from '@/lang'

const lang = Object.entries(jsonLang).reduce((accumulator, [key, value]) => {
  return { ...accumulator, [key.replace('_', '-')]: value }
}, {})

const { get: getLocaleCookie, set: setLocaleCookie } = useCookies(['locale'])

const defaultLocale = computed(() => getLocaleCookie('locale') || navigator.language)

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale.value,
  fallbackLocale: 'zh-TW',
  messages: lang,
  numberFormats: getModuleLocale('numberFormats'),
})

configure({
  generateMessage: localize(getModuleLocale('veeValidate')),
  validateOnInput: true,
})

export default function useLocale() {
  const setLocale = (locale) => {
    const newLocale = unref(locale)
    setLocaleCookie('locale', newLocale)
    i18n.global.locale.value = newLocale
    setValidateLocale(newLocale)
  }
  const showKey = (isShow) => {
    i18n.global.locale.value = unref(isShow) ? 'no-such-locale' : defaultLocale.value
    i18n.global.fallbackLocale.value = unref(isShow) ? 'no-such-locale' : 'zh-TW'
  }
  return { i18n, setLocale, showKey }
}

export function getModuleLocale(moduleName) {
  return Object.entries(lang).reduce((accumulator, [key, value]) => {
    return { ...accumulator, [key]: { ...value.modules[moduleName] } }
  }, {})
}
