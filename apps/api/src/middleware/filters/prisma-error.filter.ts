import {
  type PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  type PrismaClientRustPanicError,
  type PrismaClientUnknownRequestError,
  type PrismaClientValidationError,
} from "@prisma/client/runtime/library";

import { type ApiErrorResponse } from "@/shared";
import { ApiStatus, HttpStatus } from "@/shared/enums";
import { logger } from "@/shared/logger";

export type PrismaError =
  | PrismaClientInitializationError
  | PrismaClientKnownRequestError
  | PrismaClientRustPanicError
  | PrismaClientUnknownRequestError
  | PrismaClientValidationError;

export const prismaErrorFilter = (err: PrismaError): ApiErrorResponse => {
  const errorResponse: ApiErrorResponse = {
    status: ApiStatus.ERROR,
    statusCode: HttpStatus.BAD_REQUEST,
    message: "An internal server error occurred.",
    error: {
      details: [],
    },
  };

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    errorResponse.statusCode = HttpStatus.NOT_FOUND;
    errorResponse.message = `${err.meta?.modelName} not found`;
    errorResponse.error.details = [
      {
        path: "",
        message: "The requested resource was not found.",
      },
    ];
  }
  logger.error(errorResponse, "PrismaErrorFilter");
  return errorResponse;
};
