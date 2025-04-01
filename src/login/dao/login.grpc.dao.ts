// import { Response } from "../../common/types/response.types";
// import { CreateOtpDTO } from "../dto/create.otp.dto";
import { LoginResponseType } from "../types/login.response.type";
// import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
// import { ValidateOtpDTO } from "../dto/validate.otp.dto";
// import { LoginUserDTO } from "../dto/login.user.dto";
// import { RegisterUserDTO } from "../dto/register.user.dto";
import GrpcClient from "../../common/services/grpc/grpc.service";
import ILoginGrpcDaoInterface from "../interfaces/ILogin.grpc.dao.interface";
import path from "path";


export default class LoginGrpcDao {
    client: ILoginGrpcDaoInterface;

    constructor () {
        console.log("path", path.resolve(__dirname, "../protos/login.proto"));
        const grpcClient = new GrpcClient<ILoginGrpcDaoInterface>(path.resolve(__dirname, "../protos/login.proto"), "login", "LoginService", "localhost:2004");
        this.client = grpcClient.getClient();
    }

    loginUser = async (email: string, password: string): Promise<LoginResponseType> => {
        return new Promise((resolve, reject) => {
            this.client.Login({ email, password }, (error: Error | null, response: LoginResponseType) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
        });
    };
}