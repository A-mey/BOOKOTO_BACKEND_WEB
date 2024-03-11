import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { IProductControllerInterface } from "../interfaces/IProduct.controller.interface";
import { IProductMiddlewareInterface } from "../interfaces/IProduct.middleware.interface";

export class ProductRoutes implements CommonRoutesConfig {
    // bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "ProductRoutes";
    productController: IProductControllerInterface;
    productMiddleware: IProductMiddlewareInterface;
    
    constructor(app: express.Application, productController: IProductControllerInterface, productMiddleware: IProductMiddlewareInterface) {
        this.app = app;
        this.productController = productController;
        this.productMiddleware = productMiddleware;
        this.configureRoutes();
    }

    configureRoutes() {


        this.app.route("/products")
            .get(
                this.productController.getProducts
            );

        this.app.route("/product/:id")
            .get(
                this.productMiddleware.sendProductToRecent,
                this.productController.getProductById
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}