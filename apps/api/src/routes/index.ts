import { Router } from "express";

import { authRouter } from "@/modules/auth/auth.route";
import { userRouter } from "@/modules/user/user.route";

type ModuleRoute = {
  path: string;
  route: Router;
};

const router: Router = Router();

const moduleRoutes: ModuleRoute[] = [
  { path: "/auth", route: authRouter },
  { path: "/user", route: userRouter },
];

moduleRoutes.forEach((r) => router.use(r.path, r.route));

export default router;
