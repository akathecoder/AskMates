require("dotenv").config();

module.exports = {
  env: {
    serverUrl: process.env.SERVER_URL,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
