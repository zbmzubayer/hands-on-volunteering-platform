import { type Server, createServer } from "http";

import { connectDb } from "@/lib/db";

import expressApp from "@/app";
import { ENV } from "@/config";
import { logger } from "@/shared/logger";

async function bootstrap() {
  const app = expressApp();
  const server: Server = createServer(app);
  const port = ENV.PORT;

  await connectDb();

  try {
    server.listen(port, () => {
      logger.log(`Server is running on port ${port}`, "Bootstrap");
    });
  } catch (error) {
    logger.error(`Failed to start HandsOn API:  ${error}`, "Bootstrap");
    process.exit(1);
  }
}

bootstrap();
