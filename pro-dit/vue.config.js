const baseUrl = "http://localhost:8080";

module.exports = {
  pluginOptions: {
    sitemap: {
      urls: [`${baseUrl}/`, `${baseUrl}/randomcat`, `${baseUrl}/details`],
    },
  },
};
