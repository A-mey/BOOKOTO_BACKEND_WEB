import express from "express";
import { LoginRoutes } from "../../login/routes/login.routes.config";

export const loginContainerService = (app: express.Application) => {
    const loginRoutes = new LoginRoutes(app);
    return loginRoutes;
}