import { Response } from "../../types/response.types";

export interface ISessionServiceInterface {
    validateSession (userId: string, sessionId: string) : Promise<boolean>

    createSession () : Promise<{SESSION_ID: string}>

    getSessionData (sessionId: string) : Promise<Response>

    addSession (addSessionDto: {USERDATA: object, SET: string}) : Promise<void>
}