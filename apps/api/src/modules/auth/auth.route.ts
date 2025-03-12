import { Router } from "express";

import { authZodSchema } from "@handson/validations";

import validateRequest from "@/middleware/validate-request.middleware";
import { authController } from "@/modules/auth/auth.controller";

const router: Router = Router();

router.post("/register", validateRequest(authZodSchema.register), authController.register);
router.post("/login", validateRequest(authZodSchema.login), authController.login);

export const authRouter = router;
