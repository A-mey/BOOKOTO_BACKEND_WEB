import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models"
import { SessionService } from '../../../common/services/session/session.service';

export class AnonymousUser extends User {

    private sessionId: string;

    constructor (sessionId: string) {
        super();
        this.sessionId = sessionId;
    }

    processSession = async (): Promise<void> => {
        try {
            const sessionService = new SessionService();
            const sessionData = sessionService.getSessionData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }
}