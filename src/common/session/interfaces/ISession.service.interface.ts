import { response } from "../../types/response.types";

export interface ISessionServiceInterface {
    validateSession (userId: string, sessionId: string) : Promise<boolean>

    createSession () : Promise<{SESSION_ID: string}>

    getSessionData (sessionId: string) : Promise<response>

    addSession (addSessionDto: {USERDATA: object, SET: string}) : Promise<void>
}