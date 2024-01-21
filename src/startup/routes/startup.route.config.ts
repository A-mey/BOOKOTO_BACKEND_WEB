import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import StartupSchema from "../schema/startup.schema";
import { IStartupControllerInterface } from "../interfaces/IStartup.controllers.interface";
import { crossOrigin } from "../../common/middleware/origin.middleware";


export class StartupRoutes implements CommonRoutesConfig {
    bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "StartupRoutes";
    startupController: IStartupControllerInterface;
    
    constructor(app: express.Application, startupController: IStartupControllerInterface) {
        this.app = app;
        this.bodyValidationMiddleware = new BodyValidationMiddleware(StartupSchema);
        this.startupController = startupController;
        this.configureRoutes();
    }

    configureRoutes() {

        this.app.use(crossOrigin);

        this.app.route("/StartPage")
            .get(
                this.startupController.manageSession
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}