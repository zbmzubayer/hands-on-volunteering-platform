import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Application } from "express";
import helmet from "helmet";

export default function expressApp() {
  const app: Application = express();
  app.use(cors({ origin: "*", credentials: true }));

  app.use(helmet());

  app.use(compression());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());

  app.use(express.static("public"));

  app.get("/health", async (req, res) => {
    res.status(200).json({ message: "API healthy" });
  });

  return app;
}
