import responseTemplateConstants from "../../common/constants/response.template.constants";
import { catchError } from "../../common/utils/catch.util";
import { StartupService } from "../services/startup.service";
import Request from 'express';
import express, { Response } from 'express';

export class StartupController {
    startupService: StartupService;
    
    constructor() {
        this.startupService = new StartupService();
     }

    manageSession = async (req: express.Request, res: express.Response) => {
        try {
            const userId = req.header("USERID");
            const sessionId = req.header("SESSIONID");
            const user = await this.startupService.getUser(userId, sessionId);
            const data = await this.startupService.processSession(user);
        } catch (error : unknown) {
            const response = responseTemplateConstants.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    }
}