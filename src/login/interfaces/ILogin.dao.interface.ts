import { response } from "../../common/types/response.types";
import { CreateOtpDTO } from "../dto/create.otp.dto";
import { ValidateOtpDTO } from "../dto/validate.otp.dto";
import { RegisterUserDTO } from "../dto/register.user.dto";
import { LoginUserDTO } from "../dto/login.user.dto";

export interface ILoginDaoInterface {
    createOTPDao (createOtpDTO: CreateOtpDTO) : Promise<response>
    validateOtpDao (validateOtpDto: ValidateOtpDTO) : Promise<response>
    registerUserDao (registerUserDTO: RegisterUserDTO) : Promise<response>
    loginUserDao (loginUserDTO: LoginUserDTO) : Promise<response>
}