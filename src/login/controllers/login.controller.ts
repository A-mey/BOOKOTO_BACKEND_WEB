import express from "express";

import { Response } from "../../common/types/response.types";
import { catchError } from "../../common/utils/catch.util";
import responseTemplates from "../../common/constants/response.template.constants";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { ILoginServiceInterface } from "../interfaces/ILogin.service.interface";
import { ILoginControllerInterface } from "../interfaces/ILogin.controller.interface";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";
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
            const createOTPServiceResponse: Response = await this.loginService.createOTPService(emailIdDto);
            logger.log("createOTPServiceResponse", createOTPServiceResponse);
            res.status(createOTPServiceResponse.code).json(createOTPServiceResponse);
        } catch (error: unknown) {
            logger.log("error", await catchError(error));
            res.status(500).json(responseTemplates.DEFAULT_ERROR);
        }
    };

    validateOTP = async (req: express.Request, res: express.Response) => {
        const logger = await logFactoryService.getLog(this.logger, "validateOTP");
        try{
            const validateOtpDto = req.body as ValidateOtpDTO;
            const validateOTPServiceResponse: Response = await this.loginService.validateOTPService(validateOtpDto);
            logger.log("validateOTPServiceResponse", validateOTPServiceResponse);
            res.status(validateOTPServiceResponse.code).json(validateOTPServiceResponse);
        } catch (error: unknown) {
            logger.log("error", await catchError(error));
            res.status(500).json(responseTemplates.DEFAULT_ERROR);
        }
    };

    registerUser = async (req: express.Request, res: express.Response) : Promise<void> => {
        const logger = await logFactoryService.getLog(this.logger, "registerUser");
        try{
            const registerUserDto = req.body as RegisterUserDTO;
            const registerUserServiceResponse: Response = await this.loginService.registerUserService(registerUserDto);
            logger.log("registerUserServiceResponse", registerUserServiceResponse);
            res.status(registerUserServiceResponse.code).json(registerUserServiceResponse);
        } catch (error: unknown) {
            logger.log("error", await catchError(error));
            res.status(500).json(responseTemplates.DEFAULT_ERROR);
        }
    };

    loginUser = async (req: express.Request, res: express.Response) : Promise<void> => {
        const logger = await logFactoryService.getLog(this.logger, "loginUser");
        try{
            const loginUserDTO = req.body as LoginUserDTO;
            const sessionId = req.header("SESSION_ID")!;
            const loginUserServiceResponse: Response = await this.loginService.loginUserService(loginUserDTO);
            const userData = loginUserServiceResponse.data?.data;
            if (userData) {
                await this.loginService.addUserDataToSessionService(userData, sessionId);
                res.json(loginUserServiceResponse);
            } else {
                res.status(500).json(responseTemplates.DEFAULT_ERROR);
            }
        } catch (error: unknown) {
            logger.log("error", await catchError(error));
            res.status(500).json(responseTemplates.DEFAULT_ERROR);
        }
    };
}