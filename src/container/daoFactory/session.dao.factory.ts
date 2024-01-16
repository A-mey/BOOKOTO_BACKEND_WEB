import { SessionDao } from "../../session/dao/session.dao";
import { ISessionDaoInterface } from "../../session/interfaces/ISession.dao.interface";
import { SessionMockDao } from "../../session/dao/session.mock.dao";

export class SessionDaoFactory {
    constructor() {}

    getDao = () : ISessionDaoInterface => {
        let sessionDao: ISessionDaoInterface;
        console.log("process.env.DEPLOY_STAGE", process.env.DEPLOY_STAGE);
        if (process.env.DEPLOY_STAGE === "qc") {
            sessionDao = new SessionMockDao();
        } else {
            sessionDao = new SessionDao();
        }
        return sessionDao;
    };
}