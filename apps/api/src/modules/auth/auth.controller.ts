import { authService } from "@/modules/auth/auth.service";
import asyncHandler from "@/shared/async-handler";
import sendResponse from "@/shared/send-response";

const register = asyncHandler(async (req, res) => {
  const payload = req.body;
  const result = await authService.register(payload);
  sendResponse(res, { data: result });
});

const login = asyncHandler(async (req, res) => {
  const payload = req.body;
  const result = await authService.login(payload);
  sendResponse(res, { data: result });
});

export const authController = { register, login };
