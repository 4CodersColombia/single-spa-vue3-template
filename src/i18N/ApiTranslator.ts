import i18next from "i18next";

const getResourcesLanguages = (resources: { [key: string]: Object }) => {
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
};
export const postTranslate = async (resources: { [key: string]: Object }) => {
  await i18next.init({
    lng: navigator.language,
    debug: true,
    resources: getResourcesLanguages(resources),
  });
};
