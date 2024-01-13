import { Response } from "../../common/types/response.types";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";

export interface ILoginDaoInterface {
    createOTPDao (createOtpDTO: CreateOtpDTO) : Promise<Response>
    validateOtpDao (validateOtpDto: ValidateOtpDTO) : Promise<Response>
    registerUserDao (registerUserDTO: RegisterUserDTO) : Promise<Response>
    loginUserDao (loginUserDTO: LoginUserDTO) : Promise<Response>
}