import { userService } from "@/modules/user/user.service";
import { type ReqParamsId } from "@/shared";
import asyncHandler from "@/shared/async-handler";
import sendResponse from "@/shared/send-response";

const findAll = asyncHandler(async (req, res) => {
  const result = await userService.findAll();
  sendResponse(res, { message: "Users fetched successfully", data: result });
});

const findById = asyncHandler(async (req, res) => {
  const { id } = req.params as ReqParamsId;
  const result = await userService.findById(id);
  sendResponse(res, { message: "User fetched successfully", data: result });
});

// User Profile
const createProfile = asyncHandler(async (req, res) => {
  const payload = req.body;
  const result = await userService.createProfile(payload);
  sendResponse(res, { message: "Profile created successfully", data: result });
});

const updateProfile = asyncHandler(async (req, res) => {
  const { user } = req;
  const payload = req.body;
  const result = await userService.updateProfile(user.id, payload);
  sendResponse(res, { message: "Profile updated successfully", data: result });
});

export const userController = { findAll, findById, createProfile, updateProfile };
