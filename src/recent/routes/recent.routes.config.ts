import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { IRecentControllerInterface } from "../interfaces/Irecent.controller.interface";

export class RecentRoutes implements CommonRoutesConfig {
    // bodyValidationMiddleware: BodyValidationMiddleware;
    app: express.Application;
    private name = "RecentRoutes";
    recentController: IRecentControllerInterface;
    
    constructor(app: express.Application, recentController: IRecentControllerInterface) {
        this.app = app;
        this.recentController = recentController;
        this.configureRoutes();
    }

    configureRoutes() {

        this.app.route("/recent")
            .get(
                this.recentController.getRecentProductsList
            );

        this.app.route("/recent")
            .put(
                this.recentController.addToRecentProductsList
            );
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}