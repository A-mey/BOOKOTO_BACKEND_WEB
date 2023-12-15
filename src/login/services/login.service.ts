import { catchError } from "../../common/utils/catch.util";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { response } from "../../common/types/response.types";
import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
import { emailDto } from "../dto/email.dto";
import { ILoginServiceInterface } from "../interfaces/ILogin.service.interface";

export class LoginService implements ILoginServiceInterface {
    loginDao: ILoginDaoInterface;
    logger: LogService;

    constructor(loginDao: ILoginDaoInterface) {
        this.loginDao = loginDao;
        this.logger = new LogService("LoginController");
    }

    getOtp = async (emailDto: emailDto): Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "authenticateUserData");
        try {
            const checkAuthResponse = await this.loginDao.getOtp(emailDto);
            logger.log("checkAuthResponse", checkAuthResponse);
            return checkAuthResponse;
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };


}