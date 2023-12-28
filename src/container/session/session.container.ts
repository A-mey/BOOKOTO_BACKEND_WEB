import { SessionDao } from "../../common/session/dao/session.dao";
import { SessionService } from "../../common/session/services/session.service";
import { ISessionServiceInterface } from "../../login/interfaces/ISession.service.interface";

export const sessionContainer = (): ISessionServiceInterface => {
    const sessionDao = new SessionDao();
    const sessionService = new SessionService(sessionDao);
    return sessionService;
};
