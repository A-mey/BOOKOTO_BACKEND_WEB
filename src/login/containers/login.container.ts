import { Router } from "express";
import { LoginController } from "../controllers/login.controller";
import { LoginRoutes } from "../routes/login.routes";
import IContainerInterface from "../../common/interfaces/IContainer.interface";
import LoginService from "../services/login.service";
import LoginDao from "../dao/login.dao";
import LoginGrpcDao from "../dao/login.grpc.dao";
import { SessionService } from "../../session/services/session.service";
import { SessionDao } from "../../session/dao/session.dao";
import { BodyValidationMiddleware } from "../../common/middleware/body.validation.middleware";
import LoginSchema from "../schema/login.schema";

export default class LoginContainer implements IContainerInterface {

    private loginDao: LoginDao;
    private loginGrpcDao: LoginGrpcDao;
    private loginService: LoginService;
    
    private sessionDao: SessionDao;
    private sessionService: SessionService;

    private loginController: LoginController;
    private loginRoutes: LoginRoutes;
    private bodyValidationMiddleware: BodyValidationMiddleware;

    constructor () {
        this.loginDao = new LoginDao;
        this.loginGrpcDao = new LoginGrpcDao;

        this.sessionDao = new SessionDao;
        this.sessionService = new SessionService(this.sessionDao);

        this.loginService = new LoginService(this.loginDao, this.loginGrpcDao, this.sessionService);

        this.loginController = new LoginController(this.loginService);

        this.bodyValidationMiddleware = new BodyValidationMiddleware(new LoginSchema);

        this.loginRoutes = new LoginRoutes(this.bodyValidationMiddleware, this.loginController);
    }

    getRoute = (): Router  => this.loginRoutes.getRoutes();
}