import { type RegisterDto } from "@handson/validations";

import { axiosInstance } from "@/lib";

const AUTH_ENDPOINT = "/auth";

const register = async (data: RegisterDto) => {
  return await axiosInstance.post(`${AUTH_ENDPOINT}/register`, data);
};

export const authService = { register };
