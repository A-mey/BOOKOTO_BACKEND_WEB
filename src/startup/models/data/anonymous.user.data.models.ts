import { catchError } from "../../../common/utils/catch.util";
import { User } from "./user.data.models"

export class AnonymousUser extends User {

    private sessionId: string;

    constructor (sessionId: string) {
        super();
        this.sessionId = sessionId;
    }

    processSession = async (): Promise<void> => {
        try {
            const 
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }
}