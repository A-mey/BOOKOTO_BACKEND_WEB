import { SessionService } from "../../../common/session/services/session.service";
import { IUserInterface } from "../../interfaces/IUser.interface";
import { SessionDao } from "../../../common/session/dao/session.dao";

export abstract class User implements IUserInterface{
    sessionService: SessionService;
    constructor() {
        const sessionDao = new SessionDao();
        this.sessionService = new SessionService(sessionDao);
    }
    abstract processSession (): Promise<{SESSION_ID: string; data: object;} | {SESSION_ID: string}>
}