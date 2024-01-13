import { SessionDao } from "../../common/session/dao/session.dao";
import { ISessionDaoInterface } from "../../common/session/interfaces/ISession.dao.interface";
import { SessionDaoTest } from "../../test/dao/session.dao.test";

export class SessionDaoFactory {
    constructor() {}

    getDao = () : ISessionDaoInterface => {
        let sessionDao: ISessionDaoInterface;
        console.log("process.env.DEPLOY_STAGE", process.env.DEPLOY_STAGE);
        if (process.env.DEPLOY_STAGE === "qc") {
            sessionDao = new SessionDaoTest();
        } else {
            sessionDao = new SessionDao();
        }
        return sessionDao;
    };
}