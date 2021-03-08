const axios = require("axios");

const api = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

module.exports = api;
