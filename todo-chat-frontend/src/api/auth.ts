import axiosInstance from "./axiosInstance";

export async function signup(email: string, password: string) {
  return await axiosInstance.post("/auth/signup", { email, password });
}

export async function login(email: string, password: string) {
  const res = await axiosInstance.post("/auth/login", { email, password });
  return res.data;
}
