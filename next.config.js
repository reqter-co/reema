const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = {
  fa: "fa",
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
