import { ISessionServiceInterface } from "../../../login/interfaces/ISession.service.interface";
import { response } from "../../types/response.types";
import { catchError } from "../../utils/catch.util";

export class SessionService implements ISessionServiceInterface {
    constructor() {}

    validateSession = async (userId: string, sessionId: string) : Promise<boolean> => {
        try {
            return true;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    };

    createSession = async () : Promise<{SESSION_ID: string}> => {
        try {
            return {SESSION_ID: "12345"};
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    };

    getSessionData = async (sessionId: string) : Promise<response> => {
        try {
            return response;
        } catch (error: unknown) {
            throw new Error(await catchError(error)); 
        }
    };

    addSession = async (addSessionDto: {USERDATA: object, SET: string}) : Promise<void> => {
        try {
            const response: response = {};
            if (!response || response.code != 200) {
                throw new Error("Something went wrong");
            }
        } catch (error: unknown) {
            throw new Error(await catchError(error)); 
        }
    };
    
}