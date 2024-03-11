import { ISessionServiceInterface } from "../interfaces/ISession.service.interface";
import logFactoryService from "../../common/services/logger/log.factory.service";
// import logFactoryService from "../../services/logger/log.factory.service";
import { LogService } from "../../common/services/logger/log.service";
import { catchError } from "../../common/utils/catch.util";
import { ISessionDaoInterface } from "../interfaces/ISession.dao.interface";
import { ValidateSessionDTO } from "../dto/validate.session.dto";
import { GetSessionDTO } from "../dto/get.session.dto";
import { AddSessionDTO } from "../dto/add.session.dto";

export class SessionService implements ISessionServiceInterface {

    logger: LogService;
    sessionDao: ISessionDaoInterface;
    
    constructor(sessionDao: ISessionDaoInterface) {
        this.logger = new LogService("SessionService");
        this.sessionDao = sessionDao;
    }

    validateSession = async (userId: string, sessionId: string) : Promise<boolean> => {
        const logger = await logFactoryService.getLog(this.logger, "validateSession");
        try {
            const validateSessionDTO: ValidateSessionDTO = {SESSION_ID: sessionId};
            const isSessionValidResponse = await this.sessionDao.validateSessionDao(validateSessionDTO);
            const isSessionValid = isSessionValidResponse.data.data as unknown as boolean;
            return isSessionValid;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    createSession = async () : Promise<{SESSION_ID: string}> => {
        const logger = await logFactoryService.getLog(this.logger, "createSession");
        try {
            const sessionDetails = await this.sessionDao.createSessionDao();
            const sessionId = sessionDetails.data.data as unknown as {SESSION_ID: string};
            return sessionId;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    getSessionData = async (sessionId: string) : Promise<{SESSION_ID: string; DATA: object;}> => {
        const logger = await logFactoryService.getLog(this.logger, "getSessionData");
        try {
            const getSessionDTO : GetSessionDTO = {SESSION_ID: sessionId}; 
            const sessionDataResponse = await this.sessionDao.getSessionDataDao(getSessionDTO);
            const sessionData = sessionDataResponse.data.data as {SESSION_ID: string; DATA: object;};
            return sessionData;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };

    addSession = async (addSessionDto: AddSessionDTO) : Promise<void> => {
        const logger = await logFactoryService.getLog(this.logger, "addSession");
        try {
            const response = await this.sessionDao.addSessionDao(addSessionDto);
            if (response.code != 200) {
                throw new Error("Something went wrong");
            }
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        }
    };
    
}