import express from "express";
import { StartupController } from "../../../startup/controllers/startup.controller";
import { StartupRoutes } from "../../../startup/routes/startup.route.config";
import { StartupService } from "../../../startup/services/startup.service";
import { IdMiddleware } from "../../../common/middleware/id.middleware";
import { sessionContainer } from "../../session/session.container";

export const startupContainerService = (app: express.Application) : StartupRoutes => {
    const sessionService = sessionContainer();
    const startupService = new StartupService(sessionService);
    const startupController = new StartupController(startupService);
    const idMiddleware = new IdMiddleware();
    const startupRoutes = new StartupRoutes(app, startupController, idMiddleware);
    return startupRoutes;
};