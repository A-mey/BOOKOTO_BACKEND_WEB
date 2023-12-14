import express from "express";
import { LoginRoutes } from "../../login/routes/login.routes.config";
import { IdMiddleware } from "../../common/middleware/id.middleware";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import loginSchema from "../../login/schema/login.schema";

export const loginContainerService = (app: express.Application) => {
    const idMiddleware = new IdMiddleware();
    const bodyValidationMiddleware = new BodyValidationMiddleware(loginSchema.schema);
    const loginRoutes = new LoginRoutes(app, idMiddleware, bodyValidationMiddleware);
    return loginRoutes;
};