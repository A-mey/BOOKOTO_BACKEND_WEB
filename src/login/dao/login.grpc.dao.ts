// import { Response } from "../../common/types/response.types";
// import { CreateOtpDTO } from "../dto/create.otp.dto";
import { LoginResponseType } from "../types/login.response.type";
// import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
// import { ValidateOtpDTO } from "../dto/validate.otp.dto";
// import { LoginUserDTO } from "../dto/login.user.dto";
// import { RegisterUserDTO } from "../dto/register.user.dto";
import GrpcClient from "../../common/services/grpc/grpc.service";
import ILoginGrpcDaoInterface from "../interfaces/ILogin.grpc.dao.interface";


export default class LoginGrpcDao {
    client: ILoginGrpcDaoInterface;

    constructor () {
        const grpcClient = new GrpcClient<ILoginGrpcDaoInterface>("../protos/login.proto", "login.LoginService", "localhost:50051");
        this.client = grpcClient.getClient();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // createOTPDao = async (_createOtpDTO: CreateOtpDTO): Promise<Response> => {
    //     return {success: true, code: 200, data: {message: "OTP sent", data: {fullHash: "12345"}}};
    // };

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