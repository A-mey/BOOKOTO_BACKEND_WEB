import express from "express";

import { response } from "../../common/types/response.types";
import { catchError } from "../../common/utils/catch.util";
import responseTemplates from "../../common/constants/response.template.constants";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { ILoginServiceInterface } from "../interfaces/ILogin.service.interface";
import { ILoginControllerInterface } from "../interfaces/ILogin.controller.interface";
// const log: debug.IDebugger = debug('app:users-controller');

export class LoginController implements ILoginControllerInterface {
    logger: LogService;
    loginService: ILoginServiceInterface;

    constructor(loginService: ILoginServiceInterface) {
        this.loginService = loginService;
        this.logger = new LogService("LoginController");
    }

    createOTP = async (req: express.Request, res: express.Response) => {
        const logger = await logFactoryService.getLog(this.logger, "createOTP");
        try{
            const emailIdDto = req.body.EMAILID;
            const response: response = await this.loginService.getOtp(emailIdDto);
            res.status(response.code).json(response);
        } catch (error: unknown) {
            logger.log("error", await catchError(error));
            res.status(500).json(responseTemplates.DEFAULT_ERROR);
        }
    };

    validateOTP = async (req: express.Request, res: express.Response) => {
        const logger = await logFactoryService.getLog(this.logger, "validateOTP");
        try{
            const emailId = req.body.EMAILID;
            const response: response = await this.loginService.getOtp(emailId);
            res.status(response.code).json(response);
        } catch (error: unknown) {
            logger.log("error", await catchError(error));
            res.status(500).json(responseTemplates.DEFAULT_ERROR);
        }
    };
}