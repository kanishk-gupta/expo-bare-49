import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './en.json';
import es from './es.json';

const translations = { en, es };
const i18n = new I18n(translations);

// i18n.locale = Localization.locale; // Set the locale once at the beginning of your app.
i18n.locale = Localization.getLocales()[0].languageCode; // Set the locale once at the beginning of your app.
i18n.enableFallback = true; // When a value is missing from a language it'll fallback to another language with the key present.

export default i18n;