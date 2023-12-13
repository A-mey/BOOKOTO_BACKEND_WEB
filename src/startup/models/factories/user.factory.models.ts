import { AnonymousUser } from "../data/anonymous.user.data.models";
import { LoggedUser } from "../data/logged.user.data.models";
import { NewUser } from "../data/new.user.data.models";
import { User } from "../data/user.data.models";

export class UserFactory {
    userId: string | undefined;
    sessionId: string | undefined;
    
    constructor(userId: string | undefined, sessionId: string | undefined) {
        this.userId = userId;
        this.sessionId = sessionId;
    }

    getUser = async () : Promise<User> => {
        if (!this.userId && this.sessionId) {
            return new AnonymousUser(this.sessionId);
        } else if (this.userId && this.sessionId) {
            return new LoggedUser(this.sessionId, this.userId);
        } else if (!this.userId && !this.sessionId) {
            return new NewUser();
        } else {
            throw new Error();
        }
    }
}