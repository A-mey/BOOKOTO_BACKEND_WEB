import { IHttpReq } from "../../interfaces/IhttpReq.interface";
import { catchError } from "../../utils/catch.util";
import CommonHttpService from "./common.http.service";

class HttpRequestService implements IHttpReq {
    async getRequest(url: string, headers: object): Promise<unknown> {
        try {
            const returnData = await CommonHttpService.httpRequest("get", url, headers);
            return returnData;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    }

    async postRequest(url: string, headers: object, data: object): Promise<unknown> {
        try {
            const returnData = await CommonHttpService.httpRequest("post", url, data);
            return returnData;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    }
}

export default new HttpRequestService();