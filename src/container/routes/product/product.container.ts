import express from "express";
import { ProductRoutes } from "../../../product/routes/product.routes.config";
import { ProductDaoFactory } from "../../daoFactory/product.dao.factory";
import { ProductService } from "../../../product/services/product.service";
import { ProductController } from "../../../product/controllers/product.controller";
import { ProductMiddleware } from "../../../product/middlewares/product.middleware";

export const productContainerService = (app: express.Application) => {
    const productDao = new ProductDaoFactory().getDao();
    const productService = new ProductService(productDao);
    const productController = new ProductController(productService);
    const productMiddleware = new ProductMiddleware(productService);
    const productRoutes = new ProductRoutes(app, productController, productMiddleware);
    return productRoutes;
};