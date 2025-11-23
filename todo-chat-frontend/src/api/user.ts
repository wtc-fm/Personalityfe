import axiosInstance from "./axiosInstance";

export const getMyMbti = async () => {
  const res = await axiosInstance.get("/user/mbti");
  return res.data; 
};

export const saveMyMbti = async (mbti: string) => {
  return await axiosInstance.post("/user/mbti", { mbti });
};
