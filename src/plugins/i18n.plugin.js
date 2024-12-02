import { createI18n } from 'vue-i18n'

import ruLocale from '@/assets/locales/ru.json'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru: ruLocale
  }
})

export default i18n
