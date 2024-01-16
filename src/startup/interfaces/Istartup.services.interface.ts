import { User } from "../models/data/user.data.models";

export interface IStartupServices {
    getUser(sessionId: string) : Promise<User>
    processSession(user: User) : Promise<{SESSION_ID?: string; DATA?: object;}>
    createSession() : Promise<{SESSION_ID: string}>
}