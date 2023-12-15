import HttpRequestService from "../../common/services/http/http.services";
import { response } from "../../common/types/response.types";
import { emailDto } from "../dto/email.dto";
import { NullException } from "../../common/error/exceptions/null.exception.error";
import { catchError } from "../../common/utils/catch.util";
import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
import { LogService } from "../../common/services/logger/log.service";
import logFactoryService from "../../common/services/logger/log.factory.service";


export class LoginDao implements ILoginDaoInterface {
    logger: LogService;

    constructor () {
        this.logger = new LogService("LoginController");
    }

    getOtp = async (emailDTO: emailDto): Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "getOtp");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, emailDTO) as response;
            return getOtpData;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }  
    };


}