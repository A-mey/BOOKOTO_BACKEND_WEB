import { catchError } from "../../utils/catch.util";

export class SessionService {
    constructor() {}

    validateSession = async (userId: string, sessionId: string) : Promise<boolean> => {
        try {
            return true;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }

    createSession = async () : Promise<{SESSION_ID: string}> => {
        try {
            return {SESSION_ID: "12345"}
        } catch (error: unknown) {
            throw new Error(await catchError(error)); 
        }
    }

    getSessionData = async (sessionId: string) : Promise<{SESSION_ID: string; data: Object}> => {
        try {
            return {SESSION_ID: "12345", data: {}}
        } catch (error: unknown) {
            throw new Error(await catchError(error)); 
        }
    }



    
}