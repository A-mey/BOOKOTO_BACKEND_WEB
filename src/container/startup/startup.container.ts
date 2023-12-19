import express from "express";
import { StartupController } from "../../startup/controllers/startup.controller";
import { StartupRoutes } from "../../startup/routes/startup.route.config";
import { StartupService } from "../../startup/services/startup.service";
import { IdMiddleware } from "../../common/middleware/id.middleware";
import { SessionDao } from "../../common/session/dao/session.dao";
import { SessionService } from "../../common/session/services/session.service";

export const startupContainerService = (app: express.Application) : StartupRoutes => {
    const sessionDao = new SessionDao();
    const sessionService = new SessionService(sessionDao);
    const startupService = new StartupService(sessionService);
    const startupController = new StartupController(startupService);
    const idMiddleware = new IdMiddleware();
    const startupRoutes = new StartupRoutes(app, startupController, idMiddleware);
    return startupRoutes;
};