import { NullException } from "../../error/exceptions/null.exception.error";
import logFactoryService from "../../services/logger/log.factory.service";
import { LogService } from "../../services/logger/log.service";
import { response } from "../../types/response.types";
import { catchError } from "../../utils/catch.util";
import { ISessionDaoInterface } from "../interfaces/ISession.dao.interface";
import HttpRequestService from "../../services/http/http.services";
import { ValidateSessionDTO } from "../dto/validate.session.dto";

export class SessionDao implements ISessionDaoInterface {
    logger: LogService;
    
    constructor() {
        this.logger = new LogService("SessionService");
    }

    validateSessionDao = async (validateSessionDTO: ValidateSessionDTO) : Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "validateSessionDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, validateSessionDTO) as response;
            return getOtpData;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    createSessionDao = async () => {
        const logger = await logFactoryService.getLog(this.logger, "createSessionDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, createOtpDTO) as response;
            return getOtpData;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    getSessionDataDao = async () => {
        const logger = await logFactoryService.getLog(this.logger, "getSessionDataDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, createOtpDTO) as response;
            return getOtpData;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    addSessionDao = async () => {
        const logger = await logFactoryService.getLog(this.logger, "addSessionDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, createOtpDTO) as response;
            return getOtpData;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

}