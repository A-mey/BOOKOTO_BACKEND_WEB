import express, { NextFunction } from "express";
import { SessionService } from "../session/services/session.service";

export class SessionValidationMiddleware {
    sessionService: SessionService;
    constructor() {
        this.sessionService = new SessionService
    }

    validateSession = async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            const userId = req.header('ID')!;
            const sessionId = req.header('SESSIONID')!;
            const isSessionValid = await this.sessionService.validateSession(userId, sessionId);
            if (isSessionValid) {
                next();
            } else {
                res.status(401).json({status: false, code: 401, data: {message: "Authentication failed"}});
            }
        } catch (error: unknown) {
            res.status(500).json({status: false, code: 500, data: {message: "Something went wrong"}});
        }
    }

    // manageSession = async (req: express.Request, res: express.Response, next: NextFunction) => {
    //     try {
    //         const userId = req.header('ID')!;
    //         const sessionId = req.header('SESSIONID')!;
            
    //     } catch (error: unknown) {
    //         res.status(500).json({status: false, code: 500, data: {message: "Something went wrong"}});
    //     }
    // }


}