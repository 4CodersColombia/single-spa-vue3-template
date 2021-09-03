import i18next from "i18next";

function getResourcesLanguages(resources: any) {
  const keysLanguages = Object.keys(resources);
  const languages = keysLanguages.map((item) => {
    return { [item]: { translation: resources[item] } };
  });
  return languages.reduce((acum, current) => {
    return (acum = {
      ...acum,
      ...current,
    });
  }, {});
}
export async function postTranslate(language: string, resources: any) {
  console.log(getResourcesLanguages(resources));
  await i18next.init({
    lng: language,
    debug: true,
    resources: getResourcesLanguages(resources),
  });
}
