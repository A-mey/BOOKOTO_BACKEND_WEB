import { SessionDao } from "../../common/session/dao/session.dao";
import { ISessionDaoInterface } from "../../common/session/interfaces/ISession.dao.interface";
import { SessionDaoTest } from "../../test/dao/session.dao.test";

export class SessionDaoFactory {
    constructor() {}

    getDao = () : ISessionDaoInterface => {
        let sessionDao: ISessionDaoInterface;
        if (process.env.DEPLOY_STAGE === "qc") {
            sessionDao = new SessionDaoTest();
        } else {
            sessionDao = new SessionDao();
        }
        return sessionDao;
    };
}