import { response } from "../../types/response.types";
import { GetSessionDTO } from "../dto/get.session.dto";
import { ValidateSessionDTO } from "../dto/validate.session.dto";
import { AddSessionDTO } from "../dto/add.session.dto";

export interface ISessionDaoInterface {
    validateSessionDao (validateSessionDTO: ValidateSessionDTO) : Promise<response>

    createSessionDao () : Promise<response>

    getSessionDataDao (getSessionDTO: GetSessionDTO) : Promise<response>

    addSessionDao (addSessionDto: AddSessionDTO) : Promise<response>
}