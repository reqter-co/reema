module.exports = {
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [{ source: "/", destination: "/en" }];
  },
};

// async rewrites() {
//   return [
// Basic `path-to-regexp` usage
// Query object shape: { id: string }
// { source: "/user/:id", destination: "/user_profile" },

// Optional Language
// Query object shape: { lang?: string }
// { source: "/:lang?", destination: "/" },
// { source: "/:lang?/login", destination: "/login" },
// { source: "/:lang?/signup", destination: "/signup" },
// { source: "/:lang?/profile", destination: "/profile" },
// {
//   source: "/:lang?/tools/interest-calc",
//   destination: "/tools/interest-calc",
// },

// Advanced rewrite
// Query object shape: { id: string } (in addition to dynamic route param)
// { source: "/u/:id", destination: "/user/:id" },
//   ];
// },
