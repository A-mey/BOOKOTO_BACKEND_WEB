import { IuserInterface } from "../../../common/interfaces/Iuser.interface";
import { SessionService } from "../../../common/services/session/session.service";
import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";

export class LoggedUser extends User implements IuserInterface{
    private sessionId: string;
    private userId: string;

    constructor (sessionId: string, userId: string) {
        super();
        this.sessionId = sessionId;
        this.userId = userId;
    }

    processSession = async (): Promise<void> => {
        try {
            const sessionService = new SessionService();
            const isSessionValid = sessionService.validateSession(this.userId, this.sessionId);
            if (!isSessionValid) {
                throw new Error();
            }
            const getSessionData = sessionService.getSessionData(this.sessionId);
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }
}