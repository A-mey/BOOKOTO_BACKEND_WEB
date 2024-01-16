import { ILoginDaoInterface } from "../../login/interfaces/ILogin.dao.interface";
import { LoginDao } from "../../login/dao/login.dao";
import { LoginMockDao } from "../../login/dao/login.mock.dao";

export class LoginDaoFactory {
    constructor() {}

    getDao = () : ILoginDaoInterface => {
        let loginDao: ILoginDaoInterface;
        console.log("process.env.DEPLOY_STAGE", process.env.DEPLOY_STAGE);
        if (process.env.DEPLOY_STAGE === "qc") {
            loginDao = new LoginMockDao();
        } else {
            loginDao = new LoginDao();
        }
        return loginDao;
    };
}