import axios from "axios";

const client = axios.create({
  baseURL: "https://five-star-review-backend.onrender.com/api",
});

export default client;
