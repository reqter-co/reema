module.exports = {
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [{ source: "/", destination: "/en" }];
  },
};
