import express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";
import { startupContainerService } from "./startup/startup.container";
import { loginContainerService } from "./login/login.container";

export const containerService = (routes: Array<CommonRoutesConfig>, app: express.Application) : Array<CommonRoutesConfig> => {
    
    const startupRoutes = startupContainerService(app);
    routes.push(startupRoutes);

    const loginRoutes = loginContainerService(app);
    routes.push(loginRoutes);
    
    return routes;
};