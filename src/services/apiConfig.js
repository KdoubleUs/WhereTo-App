import axios from "axios";

let apiUrl;
// const mongoDBCloudUrl =
//   "https://restaurant-backend-appication.herokuapp.com/api";
// const local = "http://localhost:3000/";

const apiUrls = {
  production: "https://restaurant-backend-appication.herokuapp.com/api",
  development: "http://localhost:3000/api",
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
