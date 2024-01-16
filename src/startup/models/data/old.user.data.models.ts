import { IUserInterface } from "../../interfaces/IUser.interface";
import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";

export class OldUser extends User implements IUserInterface{
    private sessionId: string;

    constructor (sessionId: string) {
        super();
        this.sessionId = sessionId;
    }

    processSession = async (): Promise<{DATA: object;}> => {
        try {
            const getSessionData = this.sessionService.getSessionData(this.sessionId);
            return getSessionData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    };
}