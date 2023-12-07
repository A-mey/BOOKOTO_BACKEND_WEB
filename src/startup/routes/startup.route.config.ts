import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from 'express';
import idMiddleware from "../../common/middleware/id.middleware";
import { BodyValidationMiddleware } from '../../common/middleware/body.validation.middleware';
import StartupSchema from '../schema/startup.schema'
import { StartupController } from '../controllers/startup.controller';


export class StartupRoutes implements CommonRoutesConfig {
    private bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "StartupRoutes";
    startupController: StartupController;
    
    constructor(app: express.Application) {
        this.app = app;
        this.bodyValidationMiddleware = new BodyValidationMiddleware(StartupSchema);
        this.startupController = new StartupController();
    }

    configureRoutes() {

        this.app.use(idMiddleware.createRequestId);

        // this.app.use(this.bodyValidationMiddleware.checkSchema);

        this.app.route('/startApp')
            .get(
                this.startupController.manageSession
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}