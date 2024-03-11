import { IUserInterface } from "../../interfaces/IUser.interface";
import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models";

export class NewUser extends User implements IUserInterface {
    constructor() {
        super();
    }

    processSession = async (): Promise<{SESSION_ID: string}> => {
        try {
            const sessionData = await this.sessionService.createSession();
            return sessionData;
        } catch (error: unknown) {
            const errorMessage = await catchError(error)
            throw new Error(errorMessage.message);
        }
    };
}