import { ISessionServiceInterface } from "../../../login/interfaces/ISession.service.interface";
import logFactoryService from "../../services/logger/log.factory.service";
import { LogService } from "../../services/logger/log.service";
import { response } from "../../types/response.types";
import { catchError } from "../../utils/catch.util";
import { ISessionDaoInterface } from "../interfaces/ISession.dao.interface";
import { ValidateSessionDTO, validateSessionDTO } from '../dto/validate.session.dto';

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
            const validateSessionDTO: ValidateSessionDTO = {USER_ID: userId, SESSION_ID: sessionId}
            const isSessionValidResponse = await this.sessionDao.validateSessionDao(validateSessionDTO);
            const isSessionValid = isSessionValidResponse.data.data as unknown as boolean;
            return isSessionValid;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    createSession = async () : Promise<{SESSION_ID: string}> => {
        const logger = await logFactoryService.getLog(this.logger, "createSession");
        try {
            const sessionDetails = await this.sessionDao.createSessionDao();
            return sessionDetails.data.data as unknown as {SESSION_ID: string};
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    getSessionData = async (sessionId: string) : Promise<response> => {
        const logger = await logFactoryService.getLog(this.logger, "getSessionData");
        try {
            const sessionData = await this.sessionDao.getSessionDataDao();
            return sessionData;
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };

    addSession = async (addSessionDto: {USERDATA: object, SET: string}) : Promise<void> => {
        const logger = await logFactoryService.getLog(this.logger, "addSession");
        try {
            const response = await this.sessionDao.addSessionDao();
            if (response.code != 200) {
                throw new Error("Something went wrong");
            }
        } catch (error : unknown) {
            const errorMsg = await catchError(error);
            logger.log("error", errorMsg);
            throw new Error(errorMsg);
        }
    };
    
}