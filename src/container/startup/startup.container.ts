import express from "express";
import { StartupController } from "../../startup/controllers/startup.controller";
import { StartupRoutes } from "../../startup/routes/startup.route.config";
import { StartupService } from "../../startup/services/startup.service";

export const startupContainerService = (app: express.Application) : StartupRoutes => {
    const startupService = new StartupService();
    const startupController = new StartupController(startupService);
    const startupRoutes = new StartupRoutes(app, startupController);
    return startupRoutes;
};