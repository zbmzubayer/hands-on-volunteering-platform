import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Application } from "express";
import helmet from "helmet";

import { ENV } from "@/config";
import { globalErrorFilter, httpLoggerMiddleware } from "@/middleware";
import router from "@/routes";
import { HttpStatus } from "@/shared/enums";

export default function expressApp() {
  const app: Application = express();
  app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

  app.use(helmet());

  app.use(compression());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());

  app.use(express.static("public"));

  app.use(httpLoggerMiddleware); // Logs http requests metadata
  app.get("/health", async (req, res) => {
    res.status(200).json({ message: "API healthy" });
  });

  app.get("/health", async (req, res) => {
    res.status(HttpStatus.OK).json({ message: "API healthy" });
  });

  app.use("/api/v1", router);

  app.use(globalErrorFilter);

  return app;
}
