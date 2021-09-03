import i18next from "i18next";
export async function postTranslate(language: string, resources: any) {
  await i18next.init({
    lng: language,
    debug: true,
    resources: {
      en: {
        translation: resources[language],
      },
      de: {
        translation: resources[language],
      },
    },
  });
}
