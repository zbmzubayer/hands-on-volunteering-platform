/* eslint-disable @typescript-eslint/no-unused-vars */
import { type ErrorRequestHandler } from "express";
import { ZodError } from "zod";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { ENV } from "@/config";
import { prismaErrorFilter } from "@/middleware/filters/prisma-error.filter";
import zodErrorFilter from "@/middleware/filters/zod-error.filter";
import { ApiError, type ApiErrorResponse } from "@/shared";
import { ApiStatus, HttpStatus } from "@/shared/enums";

const globalErrorFilter: ErrorRequestHandler = (err, req, res, next) => {
  const errorResponse: ApiErrorResponse = {
    status: ApiStatus.ERROR,
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: "Something went wrong!",
    path: req.url,
    timestamp: new Date().toISOString(),
    error: {},
  };

  if (err instanceof ZodError) {
    const { error, statusCode, message } = zodErrorFilter(err);
    errorResponse.statusCode = statusCode;
    errorResponse.message = message;
    errorResponse.error.details = error.details;
  } else if (err instanceof ApiError) {
    errorResponse.statusCode = err.statusCode;
    errorResponse.message = err.message;
    errorResponse.error.details = err?.message ? [{ path: "", message: err?.message }] : [];
  } else if (err instanceof PrismaClientKnownRequestError) {
    const { error, statusCode, message } = prismaErrorFilter(err);
    errorResponse.statusCode = statusCode;
    errorResponse.message = message;
    errorResponse.error.details = error.details;
  } else if (err instanceof Error) {
    errorResponse.message = err?.message;
    errorResponse.error.details = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
  }
  res.status(errorResponse.statusCode).json({
    ...errorResponse,
    stack: ENV.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default globalErrorFilter;
