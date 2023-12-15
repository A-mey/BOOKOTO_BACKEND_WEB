import { response } from "../../common/types/response.types";
import { emailDto } from "../dto/email.dto";

export interface ILoginServiceInterface {
    getOtp (emailDto: emailDto): Promise<response>
    
}