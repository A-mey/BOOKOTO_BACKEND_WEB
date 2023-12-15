import { catchError } from "../../common/utils/catch.util";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { response } from "../../common/types/response.types";
import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ILoginServiceInterface } from "../interfaces/ILogin.service.interface";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";

export class LoginService implements ILoginServiceInterface {
    loginDao: ILoginDaoInterface;
    logger: LogService;

    constructor(loginDao: ILoginDaoInterface) {
        this.loginDao = loginDao;
        this.logger = new LogService("LoginController");
    }

    createOTPService = async (createOtpDTO : CreateOtpDTO): Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "createOTPService");
        try {
            const checkAuthResponse = await this.loginDao.createOTPDao(createOtpDTO);
            logger.log("checkAuthResponse", checkAuthResponse);
            return checkAuthResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    validateOTPService = async (validateOtpDto: ValidateOtpDTO) => {
        const logger = await logFactoryService.getLog(this.logger, "validateOTPService");
        try {
            const otpValidationResponse = await this.loginDao.validateOtpDao(validateOtpDto);
            logger.log("otpValidationResponse", otpValidationResponse);
            return otpValidationResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    registerUserService = async (registerUserDTO: RegisterUserDTO) : Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "registerUserService");
        try {
            const otpValidationResponse = await this.loginDao.registerUserDao(registerUserDTO);
            logger.log("otpValidationResponse", otpValidationResponse);
            return otpValidationResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    loginUserService = async (loginUserDTO: LoginUserDTO) : Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "registerUserService");
        try {
            const otpValidationResponse = await this.loginDao.loginUserDao(loginUserDTO);
            logger.log("otpValidationResponse", otpValidationResponse);
            return otpValidationResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

}