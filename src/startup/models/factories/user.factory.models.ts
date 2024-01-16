import { OldUser } from "../data/old.user.data.models";
import { NewUser } from "../data/new.user.data.models";
import { User } from "../data/user.data.models";

export class UserFactory {
    sessionId: string;
    
    constructor(sessionId: string) {
        this.sessionId = sessionId;
    }

    getUser = async () : Promise<User> => {
        if (this.sessionId) {
            return new OldUser(this.sessionId);
        } else if (!this.sessionId) {
            return new NewUser();
        } else {
            throw new Error();
        }
    };
}