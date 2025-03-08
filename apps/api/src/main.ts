import { type Server, createServer } from "http";

import expressApp from "@/app";

async function bootstrap() {
  const app = expressApp();
  const server: Server = createServer(app);
  const port = process.env.PORT || 5000;

  try {
    server.listen(port, () => {
      console.log(`HansOn server started on port: ${port}`);
    });
  } catch (error) {
    console.error(`Failed to start HandsOn API:  ${error}`);
    process.exit(1);
  }
}

bootstrap();
