import axios from "axios";

let apiUrl;
const mongoDBCloudUrl =
  "https://restaurant-backend-appication.herokuapp.com/api";
const local = "http://localhost:3000/";
const apiUrls = {
  production: mongoDBCloudUrl,
  development: local,
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
