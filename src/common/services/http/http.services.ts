import { IHttpReq } from "../../interfaces/IhttpReq.interface";
import { catchError } from "../../utils/catch.util";
import CommonHttpService from "./common.http.service";

class HttpRequestService implements IHttpReq {
    async getRequest(url: string): Promise<unknown> {
        try {
            const returnData = await CommonHttpService.httpRequest("get", url);
            return returnData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }

    async postRequest(url: string, data: object): Promise<unknown> {
        try {
            const returnData = await CommonHttpService.httpRequest("post", url, data);
            return returnData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }
}

export default new HttpRequestService();