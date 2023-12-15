import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { IIdMiddleWareInterface } from "../../common/interfaces/IId.middlewar.interface";
import { IBodyValidationMiddlewareInterface } from "../../common/interfaces/IBody.validation.middleware";
import { ILoginControllerInterface } from "../interfaces/ILogin.controller.interface";

export class LoginRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: IBodyValidationMiddlewareInterface;
    app: express.Application;
    private name = "LoginRoutes";
    idMiddleware: IIdMiddleWareInterface;
    loginController: ILoginControllerInterface;
    
    constructor(app: express.Application, idMiddleware: IIdMiddleWareInterface, bodyValidationMiddleware: IBodyValidationMiddlewareInterface, loginController: ILoginControllerInterface) {
        this.app = app;
        this.bodyValidationMiddleware = bodyValidationMiddleware;
        this.idMiddleware = idMiddleware;
        this.loginController = loginController;
    }
    
    configureRoutes() {

        this.app.use(this.idMiddleware.createRequestId);

        this.app.use(this.bodyValidationMiddleware.checkSchema);

        this.app.route("/createOTP")
            .post(
                this.loginController.createOTP
            );
        this.app.route("/validateOTP")
            .post(
                this.loginController.validateOTP
            );
        this.app.route("/registerUser")
            .post(
                // this.loginController.createUser
            );
        this.app.route("/loginUser")
            .post(
                // this.loginController.returnUserData
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}