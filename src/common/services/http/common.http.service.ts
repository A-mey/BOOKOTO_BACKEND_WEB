import axios, { AxiosRequestConfig, AxiosResponse} from "axios";
import { httpMethod } from "../../types/httpMethods.type";
import { NullException } from "../../error/exceptions/null.exception.error";
import { axiosErrorHandler } from "../../utils/axiosError.util";

export default class CommonHttpService {
    static httpRequest = async<T>(method: httpMethod, url: string, data?: object) : Promise<AxiosResponse<T>> => {
        try {
            const config: AxiosRequestConfig = {
                method: method,
                url: url,
                data: method === "post"? JSON.stringify(data): data,
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const httpResponse: AxiosResponse = await axios(config) as AxiosResponse<T>;
            if (!httpResponse) {
                throw new NullException();
            }
            console.log(httpResponse.data);
            return httpResponse;
        } catch(error: unknown) {
            throw new Error(await axiosErrorHandler(error));
        }
    };
}