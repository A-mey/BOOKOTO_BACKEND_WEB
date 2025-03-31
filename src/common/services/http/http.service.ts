import { Catch } from "../../utils/catch.util";
import CommonHttpService from "./common.http.service";

export default class HttpRequestService extends CommonHttpService {

    constructor () {
        super();
    }

    static getRequest = async <T>(url: string): Promise<T> => {
        try {
            const returnData = await CommonHttpService.httpRequest<T>("get", url);
            return returnData as T;
        } catch (error: unknown) {
            throw new Error(Catch(error));
        }
    };

    static postRequest = async <T>(url: string, data: object): Promise<T> => {
        try {
            const returnData = await CommonHttpService.httpRequest<T>("post", url, data);
            return returnData as T;
        } catch (error: unknown) {
            throw new Error(Catch(error));
        }
    };
}