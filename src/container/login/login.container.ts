import express from "express";
import { LoginRoutes } from "../../login/routes/login.routes.config";
import { IdMiddleware } from "../../common/middleware/id.middleware";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import loginSchema from "../../login/schema/login.schema";
import { LoginService } from "../../login/services/login.service";
import { LoginController } from "../../login/controllers/login.controller";
import { LoginDao } from "../../login/dao/login.dao";

export const loginContainerService = (app: express.Application) => {
    const idMiddleware = new IdMiddleware();
    const loginDao = new LoginDao();
    const loginService = new LoginService(loginDao);
    const loginController = new LoginController(loginService);
    const bodyValidationMiddleware = new BodyValidationMiddleware(loginSchema.schema);
    const loginRoutes = new LoginRoutes(app, idMiddleware, bodyValidationMiddleware, loginController);
    return loginRoutes;
};