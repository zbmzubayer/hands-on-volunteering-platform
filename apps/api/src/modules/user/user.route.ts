import { Router } from "express";

import { profileZodSchema } from "@handson/validations";

import { authGuard } from "@/middleware/guards/auth.guard";
import validateRequest from "@/middleware/validate-request.middleware";
import { reqParamsSchema, reqQuerySchema } from "@/shared/query-param.validation";

import { userController } from "./user.controller";

const router: Router = Router();

router.use(authGuard());

router.get("/:id", validateRequest(reqParamsSchema), userController.findById);
router.get("/", validateRequest(reqQuerySchema), userController.findAll);
// User Profile
router.post("/profile", validateRequest(profileZodSchema.create), userController.createProfile);
router.patch("/profile", validateRequest(profileZodSchema.update), userController.updateProfile);

export const userRouter = router;
