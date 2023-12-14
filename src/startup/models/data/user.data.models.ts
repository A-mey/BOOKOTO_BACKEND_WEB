import { IUserInterface } from "../../interfaces/IUser.interface";

export abstract class User implements IUserInterface{
    abstract processSession (): Promise<{SESSION_ID: string; data: object;} | {SESSION_ID: string}>
}