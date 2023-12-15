import { catchError } from "../../utils/catch.util";
import CommonHttpService from "./common.http.service";

class HttpRequestService {
    async getRequest(url: string): Promise<unknown> {
        try {
            const returnData = await CommonHttpService.httpRequest(url, {}, "get");
            return returnData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }

    async postRequest(url: string, data: object): Promise<unknown> {
        try {
            const returnData = await CommonHttpService.httpRequest(url, data, "post");
            return returnData;
        } catch (error: unknown) {
            throw new Error(await catchError(error));
        }
    }
}

export default new HttpRequestService();