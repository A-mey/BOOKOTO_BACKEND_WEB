import { IuserInterface } from "../../../common/interfaces/Iuser.interface";

export abstract class User implements IuserInterface{

    abstract processSession (): Promise<void>
}