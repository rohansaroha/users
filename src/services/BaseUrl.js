import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { Accept: "application/vnd.github.v3+json" }
});

export default api;
