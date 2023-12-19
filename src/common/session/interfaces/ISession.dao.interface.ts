import { response } from "../../types/response.types";
import { ValidateSessionDTO } from "../dto/validate.session.dto";

export interface ISessionDaoInterface {
    validateSessionDao (validateSessionDTO: ValidateSessionDTO) : Promise<response>

    createSessionDao () : Promise<response>

    getSessionDataDao () : Promise<response>

    addSessionDao () : Promise<response>
}