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
            const userId = req.header("USERID");
            const sessionId = req.header("SESSIONID");
            const user = await this.startupService.getUser(userId, sessionId);
            const data = await this.startupService.processSession(user);
            res.json(data);
        } catch (error : unknown) {
            const response = responseTemplateConstants.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };
}