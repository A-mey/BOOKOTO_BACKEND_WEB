import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import { IProductControllerInterface } from "../interfaces/IProduct.controller.interface";
import { IdMiddleware } from "../../common/middleware/id.middleware";
// import StartupSchema from "..";



export class StartupRoutes implements CommonRoutesConfig {
    bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "StartupRoutes";
    productController: IProductControllerInterface;
    idMiddleware: IdMiddleware;
    
    constructor(app: express.Application, productController: IProductControllerInterface) {
        this.app = app;
        this.bodyValidationMiddleware = new BodyValidationMiddleware(StartupSchema);
        this.productController = productController;
        this.idMiddleware = new IdMiddleware();
        this.configureRoutes();
    }

    configureRoutes() {

        this.app.use(this.idMiddleware.createRequestId);
        this.app.use(this.bodyValidationMiddleware.checkSchema);

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