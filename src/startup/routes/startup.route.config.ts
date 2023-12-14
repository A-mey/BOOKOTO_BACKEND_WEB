import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import StartupSchema from "../schema/startup.schema";
import { IStartupControllerInterface } from "../interfaces/IStartup.controllers.interface";
import { IIdMiddleWareInterface } from "../../common/interfaces/IId.middlewar.interface";


export class StartupRoutes implements CommonRoutesConfig {
    bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "StartupRoutes";
    startupController: IStartupControllerInterface;
    idMiddleware: IIdMiddleWareInterface;
    
    constructor(app: express.Application, startupController: IStartupControllerInterface, idMiddleware: IIdMiddleWareInterface) {
        this.app = app;
        this.bodyValidationMiddleware = new BodyValidationMiddleware(StartupSchema);
        this.startupController = startupController;
        this.idMiddleware = idMiddleware;
    }

    configureRoutes() {

        this.app.use(this.idMiddleware.createRequestId);

        // this.app.use(this.bodyValidationMiddleware.checkSchema);

        this.app.route("/startApp")
            .get(
                this.startupController.manageSession
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}