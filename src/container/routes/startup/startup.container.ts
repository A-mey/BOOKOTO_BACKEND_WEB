import express from "express";
import { StartupController } from "../../../startup/controllers/startup.controller";
import { StartupRoutes } from "../../../startup/routes/startup.route.config";
import { StartupService } from "../../../startup/services/startup.service";
import { sessionContainer } from "../../session/session.container";
import { ProductDaoFactory } from "../../daoFactory/product.dao.factory";
import { ProductService } from "../../../product/services/product.service";
import { RecentService } from "../../../recent/services/recent.service";
import { RecentDAO } from "../../../recent/dao/recent.queue.dao";

export const startupContainerService = (app: express.Application) : StartupRoutes => {
    const productDao = new ProductDaoFactory().getDao();
    const recentDao = new RecentDAO();
    const recentService = new RecentService(recentDao);
    const productService = new ProductService(productDao, recentService);
    const sessionService = sessionContainer();
    const startupService = new StartupService(sessionService, productService);
    const startupController = new StartupController(startupService);
    const startupRoutes = new StartupRoutes(app, startupController);
    return startupRoutes;
};