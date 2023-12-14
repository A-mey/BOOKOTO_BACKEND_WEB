import { CommonRoutesConfig } from "../../common/common.routes.config";
import LoginController from "../controllers/login.controller";
import LoginMiddleware from "../middleware/login.middleware";
import express from "express";
import { IIdMiddleWareInterface } from "../../common/interfaces/IId.middlewar.interface";
import { IBodyValidationMiddlewareInterface } from "../../common/interfaces/IBody.validation.middleware";

export class LoginRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: IBodyValidationMiddlewareInterface;
    app: express.Application;
    private name = "LoginRoutes";
    idMiddleware: IIdMiddleWareInterface;
    
    constructor(app: express.Application, idMiddleware: IIdMiddleWareInterface, bodyValidationMiddleware: IBodyValidationMiddlewareInterface) {
        this.app = app;
        this.bodyValidationMiddleware = bodyValidationMiddleware;
        this.idMiddleware = idMiddleware;
    }
    
    configureRoutes() {

        this.app.use(this.idMiddleware.createRequestId);

        this.app.use(this.bodyValidationMiddleware.checkSchema);

        this.app.route("/createOTP")
            .post(
                LoginMiddleware.checkWhetherUserDoesNotAlreadyExist,
                LoginController.sendOTP
            );
        this.app.route("/validateOTP")
            .post(
                LoginController.validateOTP
            );
        this.app.route("/registerUser")
            .post(
                LoginController.createUser
            );
        this.app.route("/loginUser")
            .post(
                LoginMiddleware.checkWhetherUserExists,
                LoginMiddleware.authenticateLoginData,
                LoginMiddleware.validatePassword,
                LoginController.returnUserData
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}