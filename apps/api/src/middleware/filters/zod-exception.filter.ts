import { type ZodError } from "zod";

import { type ApiErrorResponse } from "@/shared";
import { ApiStatus, HttpStatus } from "@/shared/enums";

const zodErrorFilter = (error: ZodError): ApiErrorResponse => {
  const errorResponse: ApiErrorResponse = {
    status: ApiStatus.ERROR,
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Validation error",
    error: {
      // details: error.issues.reduce((acc, issue) => `${issue.path.join(".")} - ${issue.message}, ${acc}`, ""),
      details: error.issues.map((issue) => ({
        [issue.path.join()]: issue.message,
      })),
    },
  };
  console.error("ZodErrorFilter", errorResponse);
  return errorResponse;
};

export default zodErrorFilter;
