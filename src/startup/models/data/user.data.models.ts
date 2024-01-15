import { SessionService } from "../../../common/session/services/session.service";
import { IUserInterface } from "../../interfaces/IUser.interface";
import { SessionDao } from "../../../common/session/dao/session.dao";
import { ISessionDaoInterface } from "../../../common/session/interfaces/ISession.dao.interface";
import { SessionDaoTest } from "../../../test/dao/session.dao.test";

export abstract class User implements IUserInterface{
    sessionService: SessionService;
    constructor() {
        let sessionDao: ISessionDaoInterface;
        if (process.env.DEPLOY_STAGE === "qc") {
            sessionDao = new SessionDaoTest();
        } else {
            sessionDao = new SessionDao();
        }
        this.sessionService = new SessionService(sessionDao);
    }
    abstract processSession (): Promise<{SESSION_ID: string; data: object;} | {SESSION_ID: string}>
}