import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";
import { IUserInterface } from "../../interfaces/IUser.interface";

export class AnonymousUser extends User implements IUserInterface{

    private sessionId: string;

    constructor (sessionId: string) {
        super();
        this.sessionId = sessionId;
    }

    processSession = async (): Promise<{SESSION_ID: string; DATA: object;}> => {
        try {
            const sessionData = await this.sessionService.getSessionData(this.sessionId);
            return sessionData;
        } catch (error: unknown) {
            const errorMessage = await catchError(error)
            throw new Error(errorMessage.message);
        }
    };
}