import { Response } from "../../common/types/response.types";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ILoginDaoInterface } from "../interfaces/ILogin.dao.interface";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { LoginUserDTO } from "../dto/login.user.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";


export class LoginMockDao implements ILoginDaoInterface {

    constructor () { }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createOTPDao = async (_createOtpDTO: CreateOtpDTO): Promise<Response> => {
        return {success: true, code: 200, data: {message: "OTP sent", data: {fullHash: "12345"}}};
    };

    validateOtpDao = async (validateOtpDto: ValidateOtpDTO) : Promise<Response> => {
        if (validateOtpDto.EMAILID === "amey2p@gmail.com" && validateOtpDto.HASH === "12345" && validateOtpDto.OTP === "123456") {
            return {success: true, code: 200, data: {message: "OTP verified"}};
        } else {
            return {success: false, code: 400, data: {message: "OTP verification failed"}};
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registerUserDao = async (_registerUserDTO: RegisterUserDTO) : Promise<Response> => {
        return {success: true, code: 200, data: {message: "Registration successful"}};
    };

    loginUserDao = async (loginUserDTO: LoginUserDTO) : Promise<Response> => {
        if (loginUserDTO.EMAILID === "amey2p@gmail.com" && loginUserDTO.PASSWORD === "Pass@1234") {
            return {success: true, code: 200, data: {message: "Registration successful"}};
        } else {
            return {success: false, code: 400, data: {message: "Registration failed"}};
        }
    };


}