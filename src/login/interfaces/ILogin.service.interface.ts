import { response } from "../../common/types/response.types";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";

export interface ILoginServiceInterface {
    createOTPService (createOtpDTO: CreateOtpDTO): Promise<response>
    validateOTPService (validateOtpDto: ValidateOtpDTO): Promise<response>
    registerUserService (registerUserDTO: RegisterUserDTO) : Promise<response>
    loginUserService (loginUserDTO: LoginUserDTO) : Promise<response>
    
}