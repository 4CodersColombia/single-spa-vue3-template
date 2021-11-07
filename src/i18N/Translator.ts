/* eslint-disable @typescript-eslint/no-explicit-any */
import i18next from "i18next";
const language = navigator.language.slice(0, 2);

export default class Translator {
  private constructor(translations: any, key: string) {
    if (i18next.isInitialized == undefined) {
      this.postTranslate(translations);
      return;
    }
    const resourceLanguage = translations[language] ? language : "en";
    i18next.addResource(
      resourceLanguage,
      "translation",
      key,
      translations[resourceLanguage][key]
    );
  }

  public getResourcesLanguages(
    resources: Record<string, Record<string, string | Record<string, string>>>
  ) {
    const keysLanguages = Object.keys(resources);
    const languages = keysLanguages.map((item) => {
      return { [item]: { translation: resources[item] } };
    });
    return languages.reduce((acum, current) => {
      return {
        ...acum,
        ...current,
      };
    }, {});
  }

  public async postTranslate(
    resources: Record<string, Record<string, string | Record<string, string>>>,
    resourceLanguage?: string
  ) {
    await i18next.init({
      debug: true,
      lng: resourceLanguage ? resourceLanguage : language,
      resources: this.getResourcesLanguages(resources),
    });
  }

  public static async changeLanguage(newLanguage: string) {
    await i18next.changeLanguage(newLanguage, (err) => {
      if (err) {
        return console.log("something went wrong loading language", err);
      }
    });
  }

  public static exists(nameSpace: string, key: string): boolean {
    return i18next.exists(`${nameSpace}.${key}`);
  }

  public static translate(nameSpace: string, key: string): string {
    if (this.exists(nameSpace, key)) {
      return i18next.t(`${nameSpace}.${key}`);
    }
    this.changeLanguage("en");
    return i18next.t(`${nameSpace}.${key}`);
  }

  public static getInstance(translations: any, key: string): Translator {
    return new Translator(translations, key);
  }
}
