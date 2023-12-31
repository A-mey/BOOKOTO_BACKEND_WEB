import { Response } from "../../common/types/response.types";
import { ISessionDaoInterface } from "../../common/session/interfaces/ISession.dao.interface";
import { ValidateSessionDTO } from "../../common/session/dto/validate.session.dto";
import { GetSessionDTO } from "../../common/session/dto/get.session.dto";
import { AddSessionDTO } from "../../common/session/dto/add.session.dto";

export class SessionDaoTest implements ISessionDaoInterface {
    
    constructor() { }

    validateSessionDao = async (validateSessionDTO: ValidateSessionDTO) : Promise<Response> => {
        let response: Response;
        if (validateSessionDTO.USER_ID === "1234" && validateSessionDTO.SESSION_ID === "ABCDEF12345") {
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
        return {code: 200, success: true, data: {message: "session created", data: {SESSION_ID: "ABCDEF12345", DATA: {}}}};
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addSessionDao = async (_addSessionDTO : AddSessionDTO) : Promise<Response> => {
        return {code: 200, success: true, data: {message: "session added"}};
    };

}