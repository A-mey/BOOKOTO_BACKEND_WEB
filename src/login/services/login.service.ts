import { catchError } from "../../common/utils/catch.util";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { Response } from "../../common/types/response.types";
import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ILoginServiceInterface } from "../interfaces/ILogin.service.interface";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";
import { ISessionServiceInterface } from "../interfaces/ISession.service.interface";
import { NullException } from "../../common/error/exceptions/null.exception.error";

export class LoginService implements ILoginServiceInterface {
    loginDao: ILoginDaoInterface;
    logger: LogService;
    sessionService: ISessionServiceInterface;

    constructor(loginDao: ILoginDaoInterface, sessionService: ISessionServiceInterface) {
        this.loginDao = loginDao;
        this.sessionService = sessionService;
        this.logger = new LogService("LoginController");
    }

    createOTPService = async (createOtpDTO : CreateOtpDTO): Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "createOTPService");
        try {
            const checkAuthResponse = await this.loginDao.createOTPDao(createOtpDTO);
            logger.info("checkAuthResponse", checkAuthResponse);
            return checkAuthResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    validateOTPService = async (validateOtpDto: ValidateOtpDTO) => {
        const logger = await logFactoryService.getLog(this.logger, "validateOTPService");
        try {
            const otpValidationResponse = await this.loginDao.validateOtpDao(validateOtpDto);
            logger.info("otpValidationResponse", otpValidationResponse);
            return otpValidationResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    registerUserService = async (registerUserDTO: RegisterUserDTO) : Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "registerUserService");
        try {
            const otpValidationResponse = await this.loginDao.registerUserDao(registerUserDTO);
            logger.info("otpValidationResponse", otpValidationResponse);
            return otpValidationResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    loginUserService = async (loginUserDTO: LoginUserDTO) : Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "registerUserService");
        try {
            const otpValidationResponse = await this.loginDao.loginUserDao(loginUserDTO);
            logger.info("otpValidationResponse", otpValidationResponse);
            return otpValidationResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    addUserDataToSessionService = async (userData: object, sessionId: string) : Promise<void> => {
        const logger = await logFactoryService.getLog(this.logger, "addUserDataToSessionService");
        try {
            if (!userData) {
                throw new NullException();
            }
            const dataToInsert = {SESSION_ID: sessionId, DATA: userData, SET: "SESSION"};
            await this.sessionService.addSession(dataToInsert);
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };
}