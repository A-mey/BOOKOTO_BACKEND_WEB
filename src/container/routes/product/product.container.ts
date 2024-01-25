import express from "express";
import { ProductRoutes } from "../../../product/routes/product.routes.config";
import { ProductDaoFactory } from "../../daoFactory/product.dao.factory";
import { ProductService } from "../../../product/services/product.service";
import { ProductController } from "../../../product/controllers/product.controller";
import { ProductMiddleware } from "../../../product/middlewares/product.middleware";
import { RecentDAO } from "../../../recent/dao/recent.dao";
import { RecentService } from "../../../recent/services/recent.service";

export const productContainerService = (app: express.Application) => {
    const productDao = new ProductDaoFactory().getDao();
    const recentDao = new RecentDAO();
    const recentService = new RecentService(recentDao);
    const productService = new ProductService(productDao, recentService);
    const productController = new ProductController(productService);
    const productMiddleware = new ProductMiddleware(productService);
    const productRoutes = new ProductRoutes(app, productController, productMiddleware);
    return productRoutes;
};