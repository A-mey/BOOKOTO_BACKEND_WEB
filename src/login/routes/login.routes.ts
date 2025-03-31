import { CommonRoutesConfig } from "../../common/common.routes.config";
import express, { Router } from "express";
import { IBodyValidationMiddlewareInterface } from "../../common/interfaces/IBody.validation.middleware";
import { ILoginControllerInterface } from "../interfaces/ILogin.controller.interface";

export class LoginRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: IBodyValidationMiddlewareInterface;
    private name = "LoginRoute";
    private loginController: ILoginControllerInterface;
    private router: Router;
    
    constructor(bodyValidationMiddleware: IBodyValidationMiddlewareInterface, loginController: ILoginControllerInterface) {
        this.loginController = loginController;
        this.bodyValidationMiddleware = bodyValidationMiddleware;
        this.router = express.Router();
        this.configureRoutes();
    }
    
    configureRoutes() {

        this.router.use(this.bodyValidationMiddleware.checkSchema);

        this.router.route("/otp/otp")
            .post(
                this.loginController.createOTP
            );
        this.router.route("/otp/verification")
            .post(
                this.loginController.validateOTP
            );
        this.router.route("/login/registration")
            .post(
                this.loginController.registerUser
            );
        this.router.route("/login/login")
            .post(
                this.loginController.loginUser
            );
        return this.router;
    }

    getName = (): string => this.name;

    getRoutes = (): Router => this.router;
}