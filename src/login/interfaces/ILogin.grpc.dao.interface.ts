import { LoginRequestType } from "../types/login.request.type";
import { LoginResponseType } from "../types/login.response.type";

export default interface ILoginGrpcDaoInterface {
    Login: (data: LoginRequestType, callback: (error: Error | null, response: LoginResponseType) => void) => void;
// eslint-disable-next-line semi
}
