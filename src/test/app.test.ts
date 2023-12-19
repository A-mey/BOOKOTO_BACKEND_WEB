import { server } from "../app";
import { expect } from "chai";
import { LoginService } from "../login/services/login.service";


describe("Login Services", async () => {
    // let request: supertest.SuperAgentTest;
    beforeEach(() => {
        
    });
    before(function() {
        
    });
    after(function(done) {
        server.close(done);
    });

    describe("Login services", () => {
        const loginService = new LoginService();
        
        it("checkWhetherUserExists should return true if user exists", async () => {
            const response = await loginService.checkWhetherUserExists("amey2p@gmail.com");
            const response2 = await loginService.checkWhetherUserExists("notfound@gmail.com");
            expect(response).to.deep.equal(true);
            expect(response2).to.deep.equal(false);
        });
    
        
    });
});


