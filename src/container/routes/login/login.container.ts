import express from "express";
import { LoginRoutes } from "../../../login/routes/login.routes.config";
import { BodyValidationMiddleware } from "../../../common/middleware/body.validation.middleware";
import loginSchema from "../../../login/schema/login.schema";
import { LoginService } from "../../../login/services/login.service";
import { LoginController } from "../../../login/controllers/login.controller";
import { SessionService } from "../../../session/services/session.service";
import { LoginDaoFactory } from "../../daoFactory/login.dao.factory";
import { SessionDaoFactory } from "../../daoFactory/session.dao.factory";

export const loginContainerService = (app: express.Application) => {
    const loginDao = new LoginDaoFactory().getDao();
    const sessionDao = new SessionDaoFactory().getDao();
    const sessionService = new SessionService(sessionDao);
    const loginService = new LoginService(loginDao, sessionService);
    const loginController = new LoginController(loginService);
    const bodyValidationMiddleware = new BodyValidationMiddleware(loginSchema.schema);
    const loginRoutes = new LoginRoutes(app, bodyValidationMiddleware, loginController);
    return loginRoutes;
};