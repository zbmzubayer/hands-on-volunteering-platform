/**
 * Routes for the application
 */
export const ROUTES = {
  AUTH: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
  },
  PUBLIC: {
    HOME: "/",
    ABOUT: "/about",
  },
} as const;
/**
 * Public routes are accessible by everyone
 */
export const PUBLIC_ROUTES: string[] = Object.values(ROUTES.PUBLIC);
/**
 * Auth routes are for authentication and authorization
 */
export const AUTH_ROUTES: string[] = Object.values(ROUTES.AUTH);
