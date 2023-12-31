import { NullException } from "../../error/exceptions/null.exception.error";
import logFactoryService from "../../services/logger/log.factory.service";
import { LogService } from "../../services/logger/log.service";
import { Response } from "../../types/response.types";
import { catchError } from "../../utils/catch.util";
import { ISessionDaoInterface } from "../interfaces/ISession.dao.interface";
import HttpRequestService from "../../services/http/http.services";
import { ValidateSessionDTO } from "../dto/validate.session.dto";
import { GetSessionDTO } from "../dto/get.session.dto";
import { AddSessionDTO } from "../dto/add.session.dto";

export class SessionDao implements ISessionDaoInterface {
    logger: LogService;
    
    constructor() {
        this.logger = new LogService("SessionService");
    }

    validateSessionDao = async (validateSessionDTO: ValidateSessionDTO) : Promise<Response> => {
        const logger = await logFactoryService.getLog(this.logger, "validateSessionDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.postRequest(url, validateSessionDTO) as Response;
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
            const url: string = process.env.createSessionDao!;
            if (!url) {
                throw new NullException();
            }
            const createSessionDaoResponse = await HttpRequestService.getRequest(url) as Response;
            return createSessionDaoResponse;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    getSessionDataDao = async (getSessionDTO: GetSessionDTO) => {
        const logger = await logFactoryService.getLog(this.logger, "getSessionDataDao");
        try {
            const url: string | undefined = process.env.getSessionDataDao;
            if (!url) {
                throw new NullException();
            }
            const sessionDataResponse = await HttpRequestService.postRequest(url, getSessionDTO) as Response;
            return sessionDataResponse;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    addSessionDao = async (addSessionDTO : AddSessionDTO) => {
        const logger = await logFactoryService.getLog(this.logger, "addSessionDao");
        try {
            const url: string = process.env.addSessionDao!;
            if (!url) {
                throw new NullException();
            }
            const addSessionDaoResponse = await HttpRequestService.postRequest(url, addSessionDTO) as Response;
            return addSessionDaoResponse;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

}