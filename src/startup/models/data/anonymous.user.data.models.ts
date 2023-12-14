import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";
import { SessionService } from "../../../common/services/session/session.service";
import { IUserInterface } from "../../interfaces/IUser.interface";

export class AnonymousUser extends User implements IUserInterface{

    private sessionId: string;

    constructor (sessionId: string) {
        super();
        this.sessionId = sessionId;
    }

    processSession = async (): Promise<{SESSION_ID: string; data: object;}> => {
        try {
            const sessionService = new SessionService();
            const sessionData = sessionService.getSessionData(this.sessionId);
            return sessionData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    };
}