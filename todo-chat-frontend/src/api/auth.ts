import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export async function signup(email: string, password: string) {
  await api.post("/auth/signup", { email, password });
}

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  return res.data; 
}