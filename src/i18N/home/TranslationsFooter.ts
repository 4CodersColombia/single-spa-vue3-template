import Translator from "../ApiTranslator";
export const translations = {
  en: {
    EXAMPLE: {
      message: "Hello!! - ENssssssss",
      tos: "Term of Service",
      term: "I accept {{1}} {{0}}.",
      loadbundle: "Load Bundle {{lang}}",
    },
  },
};
type Translations = keyof typeof translations[keyof typeof translations];
type TranslationsKeys =
  keyof typeof translations[keyof typeof translations][Translations];

const language = navigator.language.slice(0, 2);
export default class ExampleTranslations {
  private constructor() {
    Translator.getInstance(translations, "EXAMPLE");
  }
  public translate(nameSpace: Translations, key: TranslationsKeys): string {
    return Translator.translate(nameSpace, key);
  }
  public getTranslations(): typeof translations[keyof typeof translations] {
    return translations[language];
  }
  public static getInstance(): ExampleTranslations {
    return new ExampleTranslations();
  }
}
