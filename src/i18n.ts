import { createI18n } from 'vue-i18n';

import en from '@/app/locales/en.json';
import ru from '@/app/locales/ru.json';

export const i18n = createI18n({
  legacy: false, // FOR Composition API
  locale: 'en', // DEFAULT LANGUAGE
  fallbackLocale: 'en', // Additional LANGUAGE
  messages: { en, ru }
});
