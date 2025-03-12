import { type NextFunction, type Request, type Response } from "express";
import { decode, getToken } from "next-auth/jwt";

import { prisma } from "@/lib/db";

import { ENV } from "@/config";
import { ApiError } from "@/shared/api-error";
import { HttpStatus } from "@/shared/enums";
import { logger } from "@/shared/logger";

export const authGuard = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    let payload = null;
    // Get the token from the request object
    payload = await getToken({ req, secret: ENV.AUTH_SECRET });
    const headerToken = req.headers.authorization?.split(" ")[1];
    // Check if the token is present in the request headers
    console.log("token", payload, headerToken);
    if (!payload && headerToken) {
      payload = await decode({ token: headerToken, secret: ENV.AUTH_SECRET });
    }
    console.log(payload);
    if (!payload) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Authentication token is missing or invalid.");
    }
    // Check if the email is present in the payload
    if (!payload.email) {
      throw new ApiError(HttpStatus.UNAUTHORIZED, "Email not found in the authentication token.");
    }
    // Find the user by email in the database
    const user = await prisma.user.findUnique({ where: { email: payload.email } });
    if (!user) {
      throw new ApiError(
        HttpStatus.UNAUTHORIZED,
        "User associated with the authentication token email not found."
      );
    }
    req.user = user; // Attach user to the request object
    next();
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
