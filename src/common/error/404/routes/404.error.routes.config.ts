import express from "express";
import { CommonRoutesConfig } from "../../../common.routes.config";
import NotFoundController from "../controllers/404.error.controllers";


export class NotFoundRoutes implements CommonRoutesConfig {
    private name = "StartupRoutes";
    app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    configureRoutes() {
        this.app.route("/*")
            .all(
                NotFoundController.notFoundResponse
            );
        
        return this.app;
    }

    getName(): string {
        return this.name;
    }
}