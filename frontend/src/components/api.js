import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const getHistory = () => API.get("/history");
export const getPrice = (symbol) => API.get(`/prices/${symbol}`);
