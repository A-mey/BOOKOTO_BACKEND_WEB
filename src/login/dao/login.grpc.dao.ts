// import { Response } from "../../common/types/response.types";
// import { CreateOtpDTO } from "../dto/create.otp.dto";
import { LoginResponseType } from "../types/login.response.type";
// import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
// import { ValidateOtpDTO } from "../dto/validate.otp.dto";
// import { LoginUserDTO } from "../dto/login.user.dto";
// import { RegisterUserDTO } from "../dto/register.user.dto";
// import GrpcClient from "../../common/services/grpc/grpc.service";
import ILoginGrpcDaoInterface from "../interfaces/ILogin.grpc.dao.interface";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";


export default class LoginGrpcDao {
    client: ILoginGrpcDaoInterface;

    // constructor () {
    //     console.log("path", path.resolve(__dirname, "../protos/login.proto"));
    //     const grpcClient = new GrpcClient<ILoginGrpcDaoInterface>(path.resolve(__dirname, "../protos/login.proto"), "login", "LoginService", "localhost:2004");
    //     this.client = grpcClient.getClient();
    // }

    constructor() {
        // Load the .proto file
        const protoPath = path.resolve(__dirname, "../protos/login.proto");
        const packageDefinition = protoLoader.loadSync(protoPath, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        });

        // Load the gRPC object
        const grpcObject = grpc.loadPackageDefinition(packageDefinition) as Record<string, unknown>;
        console.log("Loaded gRPC Services:", Object.keys(grpcObject)); // Debugging output

        // Get the package where the service is located
        const packageObj = grpcObject["login"] as Record<string, unknown>;

        if (!packageObj || !packageObj["LoginService"]) {
            throw new Error("Service LoginService not found in proto file.");
        }

        // Instantiate the gRPC client
        this.client = new (packageObj["LoginService"] as { new (...args: unknown[]): ILoginGrpcDaoInterface })(
            "localhost:2004",
            grpc.credentials.createInsecure()
        );
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