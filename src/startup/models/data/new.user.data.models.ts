import { IUserInterface } from "../../interfaces/IUser.interface";
import { SessionService } from "../../../common/services/session/session.service";
import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";

export class NewUser extends User implements IUserInterface {
    constructor() {
        super();
    }

    processSession = async (): Promise<{SESSION_ID: string}> => {
        try {
            const sessionService = new SessionService()
            const sessionData = await sessionService.createSession();
            return sessionData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }

}