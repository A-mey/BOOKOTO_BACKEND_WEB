import { response } from "../../common/types/response.types";
import { emailDto } from "../dto/email.dto";

export interface ILoginDaoInterface {
    getOtp (emailDTO: emailDto): Promise<response>
}