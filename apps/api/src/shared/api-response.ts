import { type ApiStatus } from "@/shared/enums";

export type ApiResponse<T> = {
  status?: typeof ApiStatus.SUCCESS;
  statusCode?: number;
  message?: string;
  data?: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
};
