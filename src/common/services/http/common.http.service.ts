import axios, { AxiosRequestConfig, AxiosResponse} from "axios";
import { httpMethod } from "../../types/httpMethods.type";
import { NullException } from "../../error/exceptions/null.exception.error";
import { axiosErrorHandler } from "../../utils/axiosError.util";

class CommonHttpService {
    httpRequest = async(method: httpMethod, url: string, data?: object) : Promise<unknown> => {
        let res: unknown;
        try {
            const config: AxiosRequestConfig = {
                method: method,
                url: url,
                data: method === "post"? JSON.stringify(data): data,
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const httpResponse: AxiosResponse = await axios(config);
            if (!httpResponse) {
                throw new NullException();
            }
            res = httpResponse;
            console.log(httpResponse.data);
            res = httpResponse.data;
        } catch(error: unknown) {
            throw new Error(await axiosErrorHandler(error));
        }
        return res;
    };
}

export default new CommonHttpService();