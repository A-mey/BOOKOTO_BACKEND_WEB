import { IUserInterface } from "../../interfaces/IUser.interface";
import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";

export class LoggedUser extends User implements IUserInterface{
    private sessionId: string;
    private userId: string;

    constructor (sessionId: string, userId: string) {
        super();
        this.sessionId = sessionId;
        this.userId = userId;
    }

    processSession = async (): Promise<{SESSION_ID: string; DATA: object;}> => {
        try {
            const isSessionValid = this.sessionService.validateSession(this.userId, this.sessionId);
            if (!isSessionValid) {
                throw new Error();
            }
            const getSessionData = this.sessionService.getSessionData(this.sessionId);
            return getSessionData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    };
}