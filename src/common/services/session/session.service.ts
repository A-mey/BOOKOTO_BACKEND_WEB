import { catchError } from "../../utils/catch.util";

export class SessionService {
    constructor() {}

    checkSession = async (userId: string, sessionId: string) : Promise<boolean> => {
        try {
            return true;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }

    createSession = async () : Promise<any> => {

    }

    
}