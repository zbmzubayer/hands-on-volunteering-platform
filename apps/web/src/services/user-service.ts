import { type CreateProfileDto, type UpdateProfileDto } from "@handson/validations";

import { axiosInstance } from "@/lib";
import { type Profile } from "@/types/profile";

const USER_ENDPOINT = "/user";

const getById = async (id: string) => {
  return await axiosInstance.get(`${USER_ENDPOINT}/${id}`);
};

const createProfile = async (data: CreateProfileDto) => {
  return await axiosInstance.post(`${USER_ENDPOINT}/profile`, data);
};

const updateProfile = async (data: UpdateProfileDto) => {
  return await axiosInstance.patch<Profile>(`${USER_ENDPOINT}/profile`, data);
};

export const userService = { getById, createProfile, updateProfile };
