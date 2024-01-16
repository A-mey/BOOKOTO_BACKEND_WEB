import express from "express";
import responseTemplateConstants from "../../common/constants/response.template.constants";
import { IStartupControllerInterface } from "../interfaces/IStartup.controllers.interface";
import { IStartupServices } from "../interfaces/Istartup.services.interface";

export class StartupController implements IStartupControllerInterface {
    startupService: IStartupServices;
    
    constructor(startupService: IStartupServices) {
        this.startupService = startupService;
    }

    manageSession = async (req: express.Request, res: express.Response) => {
        try {
            const sessionId = req.header("SESSION_ID") || "";
            if (sessionId !== undefined) {
                const user = await this.startupService.getUser(sessionId);
                const sessionDetails = await this.startupService.processSession(user);
                res.json(sessionDetails);
            } else {
                const response = responseTemplateConstants.DEFAULT_ERROR;
                res.status(response.code).json(response);
            }
        } catch (error : unknown) {
            const response = responseTemplateConstants.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };
}