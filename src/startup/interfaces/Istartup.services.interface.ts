import { User } from "../models/data/user.data.models";

export interface IStartupServices {
    getUser(userId: string | undefined, sessionId: string | undefined) : Promise<User>
    processSession(user: User) : Promise<void>
    createSession() : Promise<{SESSION_ID: string}>
}