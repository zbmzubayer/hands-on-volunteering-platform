import { type NextFunction, type Request, type Response } from "express";

import { logger } from "@/shared/logger";

export default function httpLoggerMiddleware(request: Request, response: Response, next: NextFunction): void {
  const { ip, method, originalUrl } = request;
  const userAgent = request.get("user-agent") || "";

  response.on("close", () => {
    const { statusCode } = response;
    const contentLength = response.get("content-length");
    const level = statusCode > 399 ? "error" : "log";
    logger[level](`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`, "HTTP");
  });
  next();
}
