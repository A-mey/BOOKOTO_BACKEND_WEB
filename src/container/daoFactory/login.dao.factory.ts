import { ILoginDaoInterface } from "../../login/interfaces/ILogin.dao.interface";
import { LoginDao } from "../../login/dao/login.dao";
import { LoginDaoTest } from "../../test/dao/login.dao.test";

export class LoginDaoFactory {
    constructor() {}

    getDao = () : ILoginDaoInterface => {
        let loginDao: ILoginDaoInterface;
        console.log("process.env.DEPLOY_STAGE", process.env.DEPLOY_STAGE);
        if (process.env.DEPLOY_STAGE === "qc") {
            loginDao = new LoginDaoTest();
        } else {
            loginDao = new LoginDao();
        }
        return loginDao;
    };
}