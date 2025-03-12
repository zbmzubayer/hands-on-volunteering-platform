import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.number().min(0),
  CLIENT_URL: z.string().url(),
  AUTH_SECRET: z.string(),
});

type EnvConfig = z.infer<typeof envSchema>;

// If the environment variable is not set properly, it will throw an error.
const getEnv = <K extends keyof EnvConfig>(key: K, fallback?: EnvConfig[K]): EnvConfig[K] => {
  const value = process.env[key] as EnvConfig[K] | undefined;
  if (value) return value;
  if (fallback) return fallback;
  throw new Error(`Missing environment variable: ${key}`);
};

const envConfig: EnvConfig = {
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: Number(getEnv("PORT", 4000)),
  CLIENT_URL: getEnv("CLIENT_URL"),
  AUTH_SECRET: getEnv("AUTH_SECRET", "auth-secret"),
};

export const ENV: Readonly<EnvConfig> = envSchema.parse(envConfig);
