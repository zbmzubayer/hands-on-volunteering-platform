import { Router } from "express";

import { authRouter } from "@/modules/auth/auth.route";

type ModuleRoute = {
  path: string;
  route: Router;
};

const router: Router = Router();

const moduleRoutes: ModuleRoute[] = [{ path: "/auth", route: authRouter }];

moduleRoutes.forEach((r) => router.use(r.path, r.route));

export default router;
