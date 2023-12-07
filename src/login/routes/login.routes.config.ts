import { CommonRoutesConfig } from "../../common/common.routes.config";
import LoginController from '../controllers/login.controller';
import LoginMiddleware from '../middleware/login.middleware';
import { BodyValidationMiddleware } from '../../common/middleware/body.validation.middleware';
import idMiddleware from "../../common/middleware/id.middleware";
import express from 'express';
import StartupSchema from '../schema/login.schema';


export class LoginRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "LoginRoutes";
    
    constructor(app: express.Application) {
        // super(app, 'UserRoutes');
        this.app = app;
        this.bodyValidationMiddleware = new BodyValidationMiddleware(StartupSchema);
    }
    configureRoutes() {

        this.app.use(idMiddleware.createRequestId);

        this.app.use(this.bodyValidationMiddleware.checkSchema);

        this.app.route(`/createOTP`)
            .post(
                LoginMiddleware.checkWhetherUserDoesNotAlreadyExist,
                LoginController.sendOTP
            );
        this.app.route('/validateOTP')
            .post(
                LoginController.validateOTP
            );
        this.app.route('/registerUser')
            .post(
                LoginController.createUser
            )
        this.app.route('/loginUser')
            .post(
                LoginMiddleware.checkWhetherUserExists,
                LoginMiddleware.authenticateLoginData,
                LoginMiddleware.validatePassword,
                LoginController.returnUserData
            )
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}