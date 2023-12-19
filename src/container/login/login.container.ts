import express from "express";
import { LoginRoutes } from "../../login/routes/login.routes.config";
import { IdMiddleware } from "../../common/middleware/id.middleware";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import loginSchema from "../../login/schema/login.schema";
import { LoginService } from "../../login/services/login.service";
import { LoginController } from "../../login/controllers/login.controller";
import { LoginDao } from "../../login/dao/login.dao";
import { SessionService } from "../../common/session/services/session.service";
import { SessionDao } from "../../common/session/dao/session.dao";

export const loginContainerService = (app: express.Application) => {
    const idMiddleware = new IdMiddleware();
    const loginDao = new LoginDao();
    const sessionDao = new SessionDao();
    const sessionService = new SessionService(sessionDao);
    const loginService = new LoginService(loginDao, sessionService);
    const loginController = new LoginController(loginService);
    const bodyValidationMiddleware = new BodyValidationMiddleware(loginSchema.schema);
    const loginRoutes = new LoginRoutes(app, idMiddleware, bodyValidationMiddleware, loginController);
    return loginRoutes;
};