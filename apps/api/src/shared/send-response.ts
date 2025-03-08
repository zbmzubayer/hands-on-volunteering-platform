import { type Response } from "express";

import { type ApiResponse } from "@/shared/api-response";
import { ApiStatus } from "@/shared/enums";

const sendResponse = <T>(res: Response, resObj: ApiResponse<T>): void => {
  const { status, statusCode, message, data, meta } = resObj;
  const resBody: ApiResponse<T> = {
    status: status || ApiStatus.SUCCESS,
    statusCode: statusCode || res.statusCode,
    message,
    data,
    meta,
  };
  res.status(resBody.statusCode!).json(resBody);
};

export default sendResponse;
