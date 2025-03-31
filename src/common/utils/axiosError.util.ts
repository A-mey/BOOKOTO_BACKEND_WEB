import { isAxiosError } from "axios";
import { Catch } from "./catch.util";

export const axiosErrorHandler = async (error: unknown) => {
    let errorMessage: string;
    if (isAxiosError(error)){
        console.log("error", error.response?.data || error.message);
        errorMessage = error.response?.data || error.message;
    } else {
        errorMessage = Catch(error);
    }
    return errorMessage;
}