import { SessionService } from "../../../session/services/session.service";
import { IUserInterface } from "../../interfaces/IUser.interface";
import { ISessionDaoInterface } from "../../../session/interfaces/ISession.dao.interface";
import { SessionDaoFactory } from "../../../container/daoFactory/session.dao.factory";

export abstract class User implements IUserInterface {
    sessionService: SessionService;
    constructor() {
        const sessionDao: ISessionDaoInterface = new SessionDaoFactory().getDao();
        this.sessionService = new SessionService(sessionDao);
    }

    abstract processSession (): Promise<{SESSION_ID?: string; DATA?: object;}>
}