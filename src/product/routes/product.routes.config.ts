import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { IProductControllerInterface } from "../interfaces/IProduct.controller.interface";

export class ProductRoutes implements CommonRoutesConfig {
    // bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "StartupRoutes";
    productController: IProductControllerInterface;
    
    constructor(app: express.Application, productController: IProductControllerInterface) {
        this.app = app;
        this.productController = productController;
        this.configureRoutes();
    }

    configureRoutes() {


        this.app.route("/products")
            .get(
                this.productController.getProducts
            );

        this.app.route("/product/:id")
            .get(
                this.productController.getProductById
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}