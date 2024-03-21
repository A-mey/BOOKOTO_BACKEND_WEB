import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { IBodyValidationMiddlewareInterface } from "../../common/interfaces/IBody.validation.middleware";

export class CartRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: IBodyValidationMiddlewareInterface;
    app: express.Application;
    private name = "LoginRoutes";
    loginController: ILoginControllerInterface;
    
    constructor(app: express.Application, bodyValidationMiddleware: IBodyValidationMiddlewareInterface, loginController: ILoginControllerInterface) {
        this.app = app;
        this.bodyValidationMiddleware = bodyValidationMiddleware;
        this.loginController = loginController;
        this.configureRoutes();
    }
    
    configureRoutes() {

        this.app.use(this.bodyValidationMiddleware.checkSchema);

        this.app.route("/cart")
            .get(
                this.loginController.createOTP
            );
        this.app.route("/cart")
            .put(
                this.loginController.validateOTP
            );
    }

    getName(): string {
        return this.name;
    }
}