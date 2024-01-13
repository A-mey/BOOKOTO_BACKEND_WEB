import { SessionService } from "../../common/session/services/session.service";
import { ISessionServiceInterface } from "../../login/interfaces/ISession.service.interface";
import { SessionDaoFactory } from "../daoFactory/session.dao.factory";

export const sessionContainer = (): ISessionServiceInterface => {
    const sessionDao = new SessionDaoFactory().getDao();
    const sessionService = new SessionService(sessionDao);
    return sessionService;
};
