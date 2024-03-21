import HttpRequestService from "../../common/services/http/http.services";
import { Response } from "../../common/types/response.types";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { NullException } from "../../common/error/exceptions/null.exception.error";
import { catchError } from "../../common/utils/catch.util";
import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { LoginUserDTO } from "../dto/login.user.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";


export class LoginDao implements ILoginDaoInterface {
    logger: LogService;

    constructor () {
        this.logger = new LogService("LoginController");
    }

    createOTPDao = async (createOtpDTO: CreateOtpDTO): Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "createOTPDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, {}, createOtpDTO) as Response;
            return getOtpData;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }  
    };

    validateOtpDao = async (validateOtpDto: ValidateOtpDTO) : Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "validateOtpDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, {}, validateOtpDto) as Response;
            return getOtpData; 
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }  
    };

    registerUserDao = async (registerUserDTO: RegisterUserDTO) : Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "validateOtpDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, {}, registerUserDTO) as Response;
            return getOtpData; 
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    loginUserDao = async (loginUserDTO: LoginUserDTO) : Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "validateOtpDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, {}, loginUserDTO) as Response;
            return getOtpData; 
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        } 
    };
}