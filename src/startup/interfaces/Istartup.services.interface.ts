import { User } from "../models/data/user.data.models";

export interface IStartupServices {
    getUser(userId: string, sessionId: string) : Promise<User>
    processSession(user: User) : Promise<{SESSION_ID: string;data: object;} | {SESSION_ID: string}>
    createSession() : Promise<{SESSION_ID: string}>
}