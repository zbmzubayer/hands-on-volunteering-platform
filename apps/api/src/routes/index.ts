import { Router } from "express";

type ModuleRoute = {
  path: string;
  route: Router;
};

const router: Router = Router();

const moduleRoutes: ModuleRoute[] = [];

moduleRoutes.forEach((r) => router.use(r.path, r.route));

export default router;
