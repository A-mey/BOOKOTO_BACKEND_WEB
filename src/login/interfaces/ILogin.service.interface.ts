import { Response } from "../../common/types/response.types";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";

export interface ILoginServiceInterface {
    createOTPService (createOtpDTO: CreateOtpDTO): Promise<Response>
    validateOTPService (validateOtpDto: ValidateOtpDTO): Promise<Response>
    registerUserService (registerUserDTO: RegisterUserDTO) : Promise<Response>
    loginUserService (loginUserDTO: LoginUserDTO) : Promise<Response>
    addUserDataToSessionService(userData: object, sessionId: string) : Promise<void>
}