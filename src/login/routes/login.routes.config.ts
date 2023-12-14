import { CommonRoutesConfig } from "../../common/common.routes.config";
import LoginMiddleware from "../middleware/login.middleware";
import express from "express";
import { IIdMiddleWareInterface } from "../../common/interfaces/IId.middlewar.interface";
import { IBodyValidationMiddlewareInterface } from "../../common/interfaces/IBody.validation.middleware";
import { LoginController } from "../controllers/login.controller";

export class LoginRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: IBodyValidationMiddlewareInterface;
    app: express.Application;
    private name = "LoginRoutes";
    idMiddleware: IIdMiddleWareInterface;
    loginController: LoginController;
    
    constructor(app: express.Application, idMiddleware: IIdMiddleWareInterface, bodyValidationMiddleware: IBodyValidationMiddlewareInterface, loginController: LoginController) {
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
                LoginMiddleware.checkWhetherUserDoesNotAlreadyExist,
                this.loginController.sendOTP
            );
        this.app.route("/validateOTP")
            .post(
                this.loginController.validateOTP
            );
        this.app.route("/registerUser")
            .post(
                this.loginController.createUser
            );
        this.app.route("/loginUser")
            .post(
                LoginMiddleware.checkWhetherUserExists,
                LoginMiddleware.authenticateLoginData,
                LoginMiddleware.validatePassword,
                this.loginController.returnUserData
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}