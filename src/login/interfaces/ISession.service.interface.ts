import { AddSessionDTO } from "../../common/session/dto/add.session.dto";

export interface ISessionServiceInterface {
    validateSession (userId: string, sessionId: string) : Promise<boolean>

    createSession () : Promise<{SESSION_ID: string}>

    getSessionData (sessionId: string) : Promise<{SESSION_ID: string; DATA: object;}>

    addSession (addSessionDto: AddSessionDTO) : Promise<void>
}