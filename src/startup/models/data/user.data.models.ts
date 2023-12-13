import { IUserInterface } from "../../interfaces/IUser.interface";

export abstract class User implements IUserInterface{

    abstract processSession (): Promise<any>
}