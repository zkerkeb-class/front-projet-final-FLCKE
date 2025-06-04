import i18n from 'i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';
import i18next from 'i18next';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: en               // 'common' is our custom namespace
        },
        fr: {
            common: fr
        },
    },
});

export default i18next;
