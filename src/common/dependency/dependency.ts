import express from "express";
import RoutesInterface from "../interfaces/IRoutes.interface";

import LoginContainer from "../../login/containers/login.container";
import { HealthContainer } from "../../health/containers/health.container";

export default class Dependency {
    routes: Array<RoutesInterface> = [];
    app: express.Application;
    private readonly basePath = "/backend/v1";

    constructor(app: express.Application) {
        this.app = app;
    }

    getRoutes = () => {
        this.registerRoute("/login", new LoginContainer().getRoute());
        this.registerRoute("/health", new HealthContainer().getRoute());
    };

    private registerRoute(subPath: string, handler: express.Router) {
        this.app.use(`${this.basePath}${subPath}`, handler);
    }
}