import { type LoggerOptions, createLogger, format, transports } from "winston";

const formattedTimestamp = format.timestamp({
  format: "YYYY-MM-DD, HH:mm:ss.SSS",
});

const colorizer = format.colorize({
  colors: {
    fatal: "red",
    error: "red",
    warn: "yellow",
    info: "blue",
    debug: "white",
    trace: "grey",
  },
});

const WINSTON_DEV_FORMAT = format.combine(
  format.errors({ stack: true }),
  colorizer,
  formattedTimestamp,
  format.simple(),
  format.printf(({ level, service, context, message, timestamp }) => {
    if (context) {
      return `[${timestamp}] ${service} ${level} => [${context}] ${message}`;
    }
    return `[${timestamp}] ${level} ${message}`;
  })
);

const WINSTON_PROD_FORMAT = format.combine(format.errors({ stack: true }), formattedTimestamp, format.json());

export const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
} as const;

export const loggerConfig = (): LoggerOptions => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    levels: logLevels,
    level: process.env.LOG_LEVEL ?? "info",
    format: isProduction ? WINSTON_PROD_FORMAT : WINSTON_DEV_FORMAT,
    transports: [new transports.Console()],
    exceptionHandlers: [new transports.Console()],
    rejectionHandlers: [new transports.Console()],
    defaultMeta: {
      service: "HandsOn-API",
    },
  };
};

export const winstonLogger = createLogger(loggerConfig());
