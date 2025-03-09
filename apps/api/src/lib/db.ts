import { PrismaClient } from "@prisma/client";

import { logger } from "@/shared/logger";

const prisma = new PrismaClient({
  omit: { user: { password: true } },
});

export async function connectDb() {
  try {
    await prisma.$connect();
    logger.log("Connected to the database", "Database");
  } catch (error) {
    logger.error(`Failed to connect to the database: ${error}`, "Database");
    await prisma.$disconnect();
    process.exit(1);
  }
}

export { prisma };
