import { Response } from "../../types/response.types";
import { GetSessionDTO } from "../dto/get.session.dto";
import { ValidateSessionDTO } from "../dto/validate.session.dto";
import { AddSessionDTO } from "../dto/add.session.dto";

export interface ISessionDaoInterface {
    validateSessionDao (validateSessionDTO: ValidateSessionDTO) : Promise<Response>

    createSessionDao () : Promise<Response>

    getSessionDataDao (getSessionDTO: GetSessionDTO) : Promise<Response>

    addSessionDao (addSessionDto: AddSessionDTO) : Promise<Response>
}