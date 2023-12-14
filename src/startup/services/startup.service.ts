import { SessionService } from "../../common/services/session/session.service";
import { catchError } from "../../common/utils/catch.util";
import { User } from "../models/data/user.data.models";
import { UserFactory } from "../models/factories/user.factory.models";

export class StartupService {
    
    sessionService: SessionService;

    constructor() {
        this.sessionService = new SessionService();
    }

    getUser = async (userId: string | undefined, sessionId: string | undefined) => {
        try {
            return await new UserFactory(userId, sessionId).getUser();
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
}