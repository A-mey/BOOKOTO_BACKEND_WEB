import { catchError } from "../../common/utils/catch.util";
import { ISessionServiceInterface } from "../../login/interfaces/ISession.service.interface";
import { IStartupServices } from "../interfaces/Istartup.services.interface";
import { User } from "../models/data/user.data.models";
import { UserFactory } from "../models/factories/user.factory.models";

export class StartupService implements IStartupServices {
    
    sessionService: ISessionServiceInterface;

    constructor(sessionService: ISessionServiceInterface) {
        this.sessionService = sessionService;
    }

    getUser = async (sessionId: string) => {
        try {
            return await new UserFactory(sessionId).getUser();
        } catch (error) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };

    processSession = async (user: User) : Promise<{ SESSION_ID: string; data: object; } | { SESSION_ID: string; }>=> {
        return user.processSession();
    };

    createSession = async () => {
        try {
            return await this.sessionService.createSession();
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };

    getUserdata = async () => {
        try {
            // TODO
            return true;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        } 
    };
}