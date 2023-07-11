import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import IntlPluralRules from 'intl-pluralrules';

const resources = {
  en: {
    translation: {
      news: "News",
      settings: "Settings",
      details: "Details",
      changeLang: "Change language",
      searchPlaceHolder: "Search NewsFeed",
      notFoundMsg:
        "Sorry, we couldn't find any news articles that match your search. Please try a different search term.",
    },
  },
  it: {
    translation: {
      news: "Notizia",
      settings: "impostazioni",
      details: "Dettagli",
      changeLang: "Cambia lingua",
      searchPlaceHolder: "Cerca nel feed delle notizie",
      notFoundMsg:
        "Spiacenti, non siamo riusciti a trovare articoli di notizie che corrispondano alla tua ricerca. Si prega di provare un termine di ricerca diverso.",
    },
  },
}

if (!global.Intl) {
  global.Intl = { PluralRules: IntlPluralRules };
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
