import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { IBodyValidationMiddlewareInterface } from "../../common/interfaces/IBody.validation.middleware";
import { ILoginControllerInterface } from "../interfaces/ILogin.controller.interface";

export class LoginRoutes implements CommonRoutesConfig {
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

        this.app.route("/otp/otp")
            .post(
                this.loginController.createOTP
            );
        this.app.route("/otp/verification")
            .post(
                this.loginController.validateOTP
            );
        this.app.route("/login/registration")
            .post(
                this.loginController.registerUser
            );
        this.app.route("/login/login")
            .post(
                this.loginController.loginUser
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}