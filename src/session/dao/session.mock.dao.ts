import { Response } from "../../common/types/response.types";
import { ISessionDaoInterface } from "../interfaces/ISession.dao.interface";
import { ValidateSessionDTO } from "../dto/validate.session.dto";
import { GetSessionDTO } from "../dto/get.session.dto";
import { AddSessionDTO } from "../dto/add.session.dto";

export class SessionMockDao implements ISessionDaoInterface {
    
    constructor() { }

    validateSessionDao = async (validateSessionDTO: ValidateSessionDTO) : Promise<Response> => {
        let response: Response;
        if (validateSessionDTO.SESSION_ID === "ABCDEF12345") {
            response = {code: 200, success: true, data: {message: "session validated"}};
        } else {
            response = {code: 400, success: false, data: {message: "session not validated"}};
        }
        return response;
    };

    createSessionDao = async () => {
        return {code: 200, success: true, data: {message: "session created", data: {SESSION_ID: "ABCDEF12345"}}};
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSessionDataDao = async (getSessionDTO: GetSessionDTO) => {
        if (getSessionDTO.SESSION_ID === "ABCDEF12345") {
            return {code: 200, success: true, data: {message: "session data fetched", data: {DATA: {}}}};
        } else {
            throw new Error("Invalid session id");
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addSessionDao = async (_addSessionDTO : AddSessionDTO) : Promise<Response> => {
        return {code: 200, success: true, data: {message: "session added"}};
    };

}