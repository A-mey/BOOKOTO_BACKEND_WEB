import { AddSessionDTO } from "../../common/session/dto/add.session.dto";
import { response } from "../../common/types/response.types";

export interface ISessionServiceInterface {
    validateSession (userId: string, sessionId: string) : Promise<boolean>

    createSession () : Promise<{SESSION_ID: string}>

    getSessionData (sessionId: string) : Promise<response>

    addSession (addSessionDto: AddSessionDTO) : Promise<void>
}